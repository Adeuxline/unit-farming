/* global Vue, _, Sortable */
Vue.directive('sortable', {
  inserted(el, binding) {
    const sortable = new Sortable(el, binding.value || {});
  },
});

const originalData = {
  version: '2.1.1',
  petList: [
    { name: 'Frost Demon', fragments: 0, needed: 24, img: 173, farm: true, index: 40, defaultTier: 1 },
    { name: 'Dark Elf', fragments: 0, needed: 15, img: 171, farm: true, index: 13, defaultTier: 2 },
    { name: 'Elementalist', fragments: 0, needed: 27, img: 169, farm: true, index: 16, defaultTier: 3 },
    { name: 'Cleric', fragments: 0, needed: 15, img: 167, farm: true, index: 47, defaultTier: 4 },
  ],
  SHList: [],
  KL: 100,
  entries: 10,
  refills: 3,
  gemCostArray: [0, 100, 300, 700, 1500, 2700, 4300],
  farmList: [],
};

// Load saved data if it exists
const savedData = JSON.parse(localStorage.getItem('data')) || false;
let data;
if (savedData) {
  if (savedData.version === originalData.version) {
    data = _.cloneDeep(savedData);
  } else {
    data = _.cloneDeep(originalData);
  }
} else {
  data = _.cloneDeep(originalData);
}

const orderedPetList = _.orderBy(data.petList, 'index');
for (let i = 0; i < orderedPetList.length * 2 + 10; i++) {
  data.SHList[i] = [{}, {}];
}

// Create SH pages
for (let i = 0; i < orderedPetList.length; i++) {
  data.SHList[i][0].img = orderedPetList[i].img;
  data.SHList[i][0].name = orderedPetList[i].name;
  data.SHList[i + orderedPetList.length][0].img = orderedPetList[i].img;
  data.SHList[i + orderedPetList.length][0].name = orderedPetList[i].name;
  if (i < 5) {
    data.SHList[i][1].img = orderedPetList[i].img;
    data.SHList[i][1].name = orderedPetList[i].name;
  } else {
    data.SHList[(i - 2) * 2][1].img = orderedPetList[i].img;
    data.SHList[(i - 2) * 2][1].name = orderedPetList[i].name;
  }
  data.SHList[i * 2 + 5][1].img = orderedPetList[i].img;
  data.SHList[i * 2 + 5][1].name = orderedPetList[i].name;
}

// Create SH page numbers
for (let i = 0, page = 1, pageIndex = 1; i < data.SHList.length; i++) {
  data.SHList[i][0].KLReq = `${i * 2 + 2}`;
  data.SHList[i][0].stage = `${page}-${pageIndex}`;
  pageIndex += 4;
  data.SHList[i][1].stage = `${page}-${pageIndex}`;
  pageIndex++;
  if (pageIndex > 20) {
    pageIndex = 1;
    page++;
  }
}

// Trim off excess stages
data.SHList.length = data.petList.length * 2 - 4;

const vm = new Vue({
  el: '#app',
  data,
  created() {
    this.updateFarmList();
  },
  watch: {
    petList: {
      handler(val) {
        this.updateFarmList();
      },
    },
    KL() {
      this.updateFarmList();
    },
    entries() {
      this.updateFarmList();
    },
    refills() {
      this.updateFarmList();
    },
  },
  computed: {
    orderedPetList() {
      return _.orderBy(data.petList, 'index');
    },
  },
  methods: {
    getPet(petName) {
      let pet = data.petList[0];
      for (let i = 1; i < data.petList.length; i++) {
        if (data.petList[i].name === petName) {
          pet = data.petList[i];
        }
      }
      return pet;
    },
    reorderPetList({ oldIndex, newIndex }) {
      const movedItem = data.petList.splice(oldIndex, 1)[0];
      data.petList.splice(newIndex, 0, movedItem);
    },
    resetTierList() {
      data.petList = _.orderBy(data.petList, 'defaultTier');
    },
    addFarmedFrags() {
      for (const pet of data.petList) {
        pet.fragments += pet.farmableFrags;
      }
      this.updateFarmList();
    },
    updateFarmList() {
      // Reset farmableFrags to zero on all pets
      _.forEach(data.petList, (obj) => {
        _.set(obj, 'farmableFrags', 0);
      });

      // Save data
      localStorage.setItem('data', JSON.stringify(data));

      data.farmList = _.filter(data.petList, obj => obj.fragments < 330 && obj.farm);
      let tickets = data.entries + data.refills * 5;

      for (const pet of data.farmList) {
        const availableFrags = _.filter(data.SHList, obj => obj[0].KLReq <= data.KL && (obj[0].name === pet.name || obj[1].name === pet.name));
        pet.farmableFrags = 0;
        if (availableFrags !== []) {
          let firstStageFrags = 3;
          if (pet.index >= data.petList.length - 4) {
            // Newest pets only have 1 frag on first stage
            firstStageFrags = 1;
          }
          for (let i = 0; i < availableFrags.length; i++) {
            if (availableFrags[i][0].name === pet.name) {
              pet.farmableFrags += firstStageFrags;
              // Only the first first stage has 3 frags
              if (firstStageFrags === 3) {
                firstStageFrags = 1;
              }
            }
            if (availableFrags[i][1].name === pet.name) {
              pet.farmableFrags += 3;
            }
          }
        }
        // If we're farming more frags than needed to finish the pet, remove the excess, or more than we have remaining tickets, remove excess
        pet.farmableFrags = pet.farmableFrags > 330 - pet.fragments ? 330 - pet.fragments : pet.farmableFrags;
        pet.farmableFrags = pet.farmableFrags > tickets ? tickets : pet.farmableFrags;
        pet.daysRemaining = Math.ceil((330 - pet.fragments) / pet.farmableFrags);
        tickets -= pet.farmableFrags;
        if (tickets <= 0) {
          break;
        }
      }
      data.farmList = _.filter(data.farmList, obj => obj.farmableFrags > 0);
    },
  },
});
