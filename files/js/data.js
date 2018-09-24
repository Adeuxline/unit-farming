/* global Vue, _, Sortable */
Vue.directive('sortable', {
  inserted(el, binding) {
    const sortable = new Sortable(el, binding.value || {});
  },
});

const originalData = {
  version: '0.1',
  petList: [
    { name: 'Crimson Hawk Rider', fragments_n: 0, fragments: 0, needed: 1, img: 191, index: 0, defaultTier: 1 },
    { name: 'Musketress', fragments_n: 0, fragments: 0, needed: 15, img: 183, index: 2, defaultTier: 2 },
    { name: 'Winged Knight', fragments_n: 0, fragments: 0, needed: 30, img: 175, index: 3, defaultTier: 3 },
    { name: 'Cleric', fragments_n: 0, fragments: 0, needed: 17, img: 167, index: 4, defaultTier: 4 },
    { name: 'Flame Spirit', fragments_n: 0, fragments: 0, needed: 27, img: 159, index: 5, defaultTier: 5 },
    { name: 'Valkyrie', fragments_n: 0, fragments: 0, needed: 10, img: 143, index: 6, defaultTier: 6 },
    { name: 'Steam Punk', fragments_n: 0, fragments: 0, needed: 10, img: 135, index: 7, defaultTier: 7 },
    { name: 'Pilot', fragments_n: 0, fragments: 0, needed: 5, img: 125, index: 8, defaultTier: 8 },
    { name: 'Hot-Blooded Xuanzang', fragments_n: 0, fragments: 0, needed: 5, img: 117, index: 9, defaultTier: 9 },
    { name: 'Griffin Rider', fragments_n: 0, fragments: 0, needed: 1, img: 111, index: 10, defaultTier: 10 },
    { name: 'Aladdin', fragments_n: 0, fragments: 0, needed: 18, img: 105, index: 11, defaultTier: 11 },
    { name: 'Priest', fragments_n: 0, fragments: 0, needed: 12, img: 95, index: 12, defaultTier: 12 },
    { name: 'Gunner', fragments_n: 0, fragments: 0, needed: 1, img: 18, index: 13, defaultTier: 13 },
    { name: 'Fire Mage', fragments_n: 0, fragments: 0, needed: 1, img: 16, index: 14, defaultTier: 14 },
    { name: 'Golem', fragments_n: 0, fragments: 0, needed: 1, img: 14, index: 15, defaultTier: 15 },
    { name: 'Astral Captain', fragments_n: 0, fragments: 0, needed: 10, img: 193, index: 16, defaultTier: 16 },
    { name: 'Elf Sage', fragments_n: 0, fragments: 0, needed: 15, img: 185, index: 17, defaultTier: 17 },
    { name: 'Windwalker', fragments_n: 0, fragments: 0, needed: 30, img: 177, index: 18, defaultTier: 18 },
    { name: 'Elementalist', fragments_n: 0, fragments: 0, needed: 27, img: 169, index: 19, defaultTier: 19 },
    { name: 'Hippogriff', fragments_n: 0, fragments: 0, needed: 20, img: 161, index: 20, defaultTier: 20 },
    { name: 'Sword Dancer', fragments_n: 0, fragments: 0, needed: 10, img: 145, index: 21, defaultTier: 21 },
    { name: 'Sylphid', fragments_n: 0, fragments: 0, needed: 10, img: 137, index: 22, defaultTier: 22 },
    { name: 'Alchemist', fragments_n: 0, fragments: 0, needed: 5, img: 127, index: 23, defaultTier: 23 },
    { name: 'Hoyden Goku', fragments_n: 0, fragments: 0, needed: 5, img: 119, index: 24, defaultTier: 24 },
    { name: 'Forest Guardian', fragments_n: 0, fragments: 0, needed: 1, img: 113, index: 25, defaultTier: 25 },
    { name: 'Druid', fragments_n: 0, fragments: 0, needed: 1, img: 107, index: 26, defaultTier: 26 },
    { name: 'Fairy', fragments_n: 0, fragments: 0, needed: 14, img: 97, index: 27, defaultTier: 27 },
    { name: 'Unicorn Knight', fragments_n: 0, fragments: 0, needed: 1, img: 38, index: 28, defaultTier: 28 },
    { name: 'Wolf Warrior', fragments_n: 0, fragments: 0, needed: 1, img: 36, index: 29, defaultTier: 29 },
    { name: 'Ent', fragments_n: 0, fragments: 0, needed: 1, img: 34, index: 34, defaultTier: 30 },
    { name: 'Shadow Knight', fragments_n: 0, fragments: 0, needed: 1, img: 195, index: 31, defaultTier: 31 },
    { name: 'Crow Knight', fragments_n: 0, fragments: 0, needed: 27, img: 187, index: 32, defaultTier: 32 },
    { name: 'Abyss Mage', fragments_n: 0, fragments: 0, needed: 30, img: 179, index: 33, defaultTier: 33 },
    { name: 'Dark Elf', fragments_n: 0, fragments: 0, needed: 15, img: 171, index: 34, defaultTier: 34 },
    { name: 'Dark Spirit', fragments_n: 0, fragments: 0, needed: 12, img: 163, index: 35, defaultTier: 35 },
    { name: 'Incubus', fragments_n: 0, fragments: 0, needed: 10, img: 147, index: 36, defaultTier: 36 },
    { name: 'Medusa', fragments_n: 0, fragments: 0, needed: 10, img: 139, index: 37, defaultTier: 37 },
    { name: 'Lich', fragments_n: 0, fragments: 0, needed: 5, img: 129, index: 38, defaultTier: 38 },
    { name: 'Dark Amiral', fragments_n: 0, fragments: 0, needed: 5, img: 121, index: 39, defaultTier: 39 },
    { name: 'Succubus', fragments_n: 0, fragments: 0, needed: 1, img: 115, index: 40, defaultTier: 40 },
    { name: 'Dark Ninja', fragments_n: 0, fragments: 0, needed: 1, img: 109, index: 41, defaultTier: 41 },
    { name: 'Dark Archer', fragments_n: 0, fragments: 0, needed: 24, img: 99, index: 42, defaultTier: 42 },
    { name: 'Death Knight', fragments_n: 0, fragments: 0, needed: 1, img: 58, index: 43, defaultTier: 43 },
    { name: 'Bomb Unit', fragments_n: 0, fragments: 0, needed: 1, img: 56, index: 44, defaultTier: 44 },
    { name: 'Hands of Death', fragments_n: 0, fragments: 0, needed: 1, img: 54, index: 45, defaultTier: 45 },
    { name: 'War Bear Rider', fragments_n: 0, fragments: 0, needed: 1, img: 197, index: 46, defaultTier: 46 },
    { name: 'Rangda', fragments_n: 0, fragments: 0, needed: 15, img: 189, index: 47, defaultTier: 47 },
    { name: 'Siren', fragments_n: 0, fragments: 0, needed: 30, img: 181, index: 48, defaultTier: 48 },
    { name: 'Frost Demon', fragments_n: 0, fragments: 0, needed: 24, img: 173, index: 49, defaultTier: 49 },
    { name: 'Blade Master', fragments_n: 0, fragments: 0, needed: 12, img: 165, index: 50, defaultTier: 50 },
    { name: 'Ice Spirit', fragments_n: 0, fragments: 0, needed: 10, img: 149, index: 51, defaultTier: 51 },
    { name: 'Naga', fragments_n: 0, fragments: 0, needed: 10, img: 141, index: 52, defaultTier: 52 },
    { name: 'Wyvern Rider', fragments_n: 0, fragments: 0, needed: 5, img: 131, index: 53, defaultTier: 53 },
    { name: 'Raptor Rider', fragments_n: 0, fragments: 0, needed: 5, img: 123, index: 54, defaultTier: 54 },
    { name: 'Sorcerer', fragments_n: 0, fragments: 0, needed: 24, img: 101, index: 55, defaultTier: 55 },
    { name: 'Battle Drummer', fragments_n: 0, fragments: 0, needed: 1000, img: 103, index: 56, defaultTier: 56 },
    { name: 'NO UNIT', fragments_n: 0, fragments: 0, needed: 1, img: 0, index: 57, defaultTier: 57 },
    { name: 'Wolf Rider', fragments_n: 0, fragments: 0, needed: 1, img: 78, index: 58, defaultTier: 58 },
    { name: 'Ice Wizard', fragments_n: 0, fragments: 0, needed: 1, img: 76, index: 59, defaultTier: 59 },
    { name: 'Big Foot', fragments_n: 0, fragments: 0, needed: 1, img: 74, index: 60, defaultTier: 60 },
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
/*
  if (savedData.version === originalData.version) {
    data = _.cloneDeep(savedData);
  } else {
    data = _.cloneDeep(originalData);
  }
} else {
*/
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
