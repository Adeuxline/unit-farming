/* global Vue, _, Sortable */
Vue.directive('sortable', {
  inserted(el, binding) {
    const sortable = new Sortable(el, binding.value || {});
  },
});

const originalData = {
  version: '0.1',
  petList: [
    { name: 'Crimson Hawk Rider', fragments: 0, needed: 1, img: 191, index: 16, defaultTier: 1 },
    { name: 'Musketress', fragments: 0, needed: 15, img: 183, index: 17, defaultTier: 2 },
    { name: 'Winged Knight', fragments: 0, needed: 30, img: 175, index: 18, defaultTier: 3 },
    { name: 'Cleric', fragments: 0, needed: 17, img: 167, index: 19, defaultTier: 4 },
    { name: 'Flame Spirit', fragments: 0, needed: 27, img: 159, index: 20, defaultTier: 5 },
    { name: 'Valkyrie', fragments: 0, needed: 10, img: 143, index: 20, defaultTier: 6 },
    { name: 'Steam Punk', fragments: 0, needed: 10, img: 135, index: 20, defaultTier: 7 },
    { name: 'Pilot', fragments: 0, needed: 5, img: 125, index: 20, defaultTier: 8 },
    { name: 'Hot-Blooded Xuanzang', fragments: 0, needed: 5, img: 117, index: 20, defaultTier: 9 },
    { name: 'Griffin Rider', fragments: 0, needed: 1, img: 111, index: 20, defaultTier: 10 },
    { name: 'Aladdin', fragments: 0, needed: 18, img: 105, index: 20, defaultTier: 11 },
    { name: 'Priest', fragments: 0, needed: 12, img: 95, index: 20, defaultTier: 12 },
    { name: 'Astral Captain', fragments: 0, needed: 10, img: 193, index: 46, defaultTier: 13 },
    { name: 'Elf Sage', fragments: 0, needed: 15, img: 185, index: 47, defaultTier: 14 },
    { name: 'Windwalker', fragments: 0, needed: 30, img: 177, index: 48, defaultTier: 15 },
    { name: 'Elementalist', fragments: 0, needed: 27, img: 169, index: 49, defaultTier: 16 },
    { name: 'Hippogriff', fragments: 0, needed: 20, img: 161, index: 50, defaultTier: 17 },
    { name: 'Sword Dancer', fragments: 0, needed: 10, img: 145, index: 50, defaultTier: 18 },
    { name: 'Sylphid', fragments: 0, needed: 10, img: 137, index: 50, defaultTier: 19 },
    { name: 'Alchemist', fragments: 0, needed: 5, img: 127, index: 50, defaultTier: 20 },
    { name: 'Hoyden Goku', fragments: 0, needed: 5, img: 119, index: 50, defaultTier: 21 },
    { name: 'Forest Guardian', fragments: 0, needed: 1, img: 113, index: 50, defaultTier: 22 },
    { name: 'Druid', fragments: 0, needed: 1, img: 107, index: 50, defaultTier: 23 },
    { name: 'Fairy', fragments: 0, needed: 14, img: 97, index: 50, defaultTier: 24 },
    { name: 'Shadow Knight', fragments: 0, needed: 1, img: 195, index: 76, defaultTier: 25 },
    { name: 'Crow Knight', fragments: 0, needed: 27, img: 187, index: 77, defaultTier: 26 },
    { name: 'Abyss Mage', fragments: 0, needed: 30, img: 179, index: 78, defaultTier: 27 },
    { name: 'Dark Elf', fragments: 0, needed: 15, img: 171, index: 79, defaultTier: 28 },
    { name: 'Dark Spirit', fragments: 0, needed: 12, img: 163, index: 80, defaultTier: 29 },
    { name: 'Incubus', fragments: 0, needed: 10, img: 147, index: 80, defaultTier: 30 },
    { name: 'Medusa', fragments: 0, needed: 10, img: 139, index: 80, defaultTier: 31 },
    { name: 'Lich', fragments: 0, needed: 5, img: 129, index: 80, defaultTier: 32 },
    { name: 'Dark Amiral', fragments: 0, needed: 5, img: 121, index: 80, defaultTier: 33 },
    { name: 'Succubus', fragments: 0, needed: 1, img: 115, index: 80, defaultTier: 34 },
    { name: 'Dark Ninja', fragments: 0, needed: 1, img: 109, index: 80, defaultTier: 35 },
    { name: 'Dark Archer', fragments: 0, needed: 24, img: 99, index: 80, defaultTier: 36 },
    { name: 'War Bear Rider', fragments: 0, needed: 1, img: 197, index: 106, defaultTier: 37 },
    { name: 'Rangda', fragments: 0, needed: 15, img: 173, index: 107, defaultTier: 38 },
    { name: 'Siren', fragments: 0, needed: 30, img: 181, index: 108, defaultTier: 39 },
    { name: 'Frost Demon', fragments: 0, needed: 24, img: 173, index: 109, defaultTier: 40 },
    { name: 'Blade Master', fragments: 0, needed: 12, img: 149, index: 110, defaultTier: 41 },
    { name: 'Ice Spirit', fragments: 0, needed: 10, img: 141, index: 110, defaultTier: 42 },
    { name: 'Naga', fragments: 0, needed: 10, img: 131, index: 110, defaultTier: 43 },
    { name: 'Wyvern Rider', fragments: 0, needed: 5, img: 131, index: 110, defaultTier: 44 },
    { name: 'Raptor Rider', fragments: 0, needed: 5, img: 123, index: 110, defaultTier: 45 },
    { name: 'Battle Drummer', fragments: 0, needed: 1000, img: 110, index: 110, defaultTier: 46 },
    { name: 'Sorcerer', fragments: 0, needed: 24, img: 101, index: 110, defaultTier: 47 },
    { name: 'Wolf Rider', fragments: 0, needed: 1, img: 78, index: 110, defaultTier: 48 },
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
