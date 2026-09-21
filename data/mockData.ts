export const MENU_DATA = {
  data: {
    menus: [
      {
        id: 1,
        title: "Discover",
        page_id: 1,
        type: "Sub Menu",
        status: "active",
        order_num: 0,
        show_filter: false,
        sub_menus: [],
        need_translations: false,
        translation_status: "",
        translations: null
      },
      {
        id: 5,
        title: "Exclusive",
        page_id: 7,
        type: "Sub Menu",
        status: "active",
        order_num: 0,
        show_filter: false,
        sub_menus: [],
        need_translations: false,
        translation_status: "",
        translations: null
      },
      {
        id: 2,
        title: "New",
        page_id: null,
        type: "Sub Page",
        status: "active",
        order_num: 0,
        show_filter: false,
        sub_menus: [
          {
            id: 34,
            title: "Recently Added",
            page_id: 2,
            clusters: null,
            need_translation: false,
            translation_status: "",
            translations: null
          },
          {
            id: 35,
            title: "Coming Soon",
            page_id: 3,
            clusters: null,
            need_translation: false,
            translation_status: "",
            translations: null
          }
        ],
        need_translations: false,
        translation_status: "",
        translations: null
      },
      {
        id: 3,
        title: "Ranking",
        page_id: null,
        type: "Sub Page",
        status: "active",
        order_num: 0,
        show_filter: false,
        sub_menus: [
          {
            id: 36,
            title: "Most Liked",
            page_id: 4,
            clusters: null,
            need_translation: false,
            translation_status: "",
            translations: null
          },
          {
            id: 37,
            title: "Most Viewed",
            page_id: 5,
            clusters: null,
            need_translation: false,
            translation_status: "",
            translations: null
          }
        ],
        need_translations: false,
        translation_status: "",
        translations: null
      },
      {
        id: 4,
        title: "Categories",
        page_id: 6,
        type: "Sub Menu",
        status: "active",
        order_num: 0,
        show_filter: true,
        sub_menus: [],
        need_translations: false,
        translation_status: "",
        translations: null
      }
    ]
  }
};


export const CLUSTER_DATA = {
  data: [
    {
      title: "Sedang Tren",
      properties: {
        type: "grid_3",
        item_type: "poster",
        hide_title: false
      },
      items: [
        {
          cluster_id: 6602,
          title: "The Ace They Thought Was Dead",
          description: "Revenge Plot, Betrayal, Hidden Identity",
          image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789729123_the-ace-they-thought-was-dead-S1-POSTER%20EN.jpg"
        },
        {
          cluster_id: 6602,
          title: "The Crazy Sister Who Stole My Husband",
          description: "Hidden Identity, Contract Marriage",
          image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789204657_the-crazy-sister-who-stole-my-husband-S1-POSTER%20EN.jpg"
        },
        {
          cluster_id: 6602,
          title: "Divorced To Build My Queendom",
          description: "Revenge Plot, Secret Heir",
          image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789924036_divorced-to-build-my-queendom-S1-POSTER%20EN.jpg"
        },
        {
          cluster_id: 6602,
          title: "Boss Up, My CEO!",
          description: "Revenge Plot, Marriage In Crisis",
          image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789806875_boss-up-my-ceo-S1-POSTER%20EN.jpg"
        },
        {
          cluster_id: 6602,
          title: "First Marriage Bliss",
          description: "CEO Love Interest, Contract Marriage",
          image: "https://fastpix.vplushort.com/a/480/plain/catalog/1789625175_first-marriage-bliss-S1-POSTER%20EN.jpg"
        },
        {
          cluster_id: 6602,
          title: "My Best Friend's Hot Daddy",
          description: "Blackmail, Hidden Identity",
          image: "https://fastpix.vplushort.com/a/480/plain/catalog/1788523761_my-best-friends-hot-daddy-S1-POSTER.jpg"
        }
      ]
    },
    {
      title: "Coming Soon",
      properties: {
        type: "horizontal_strip",
        item_type: "coming_soon",
        hide_title: false
      },
      items: [
        {
          cluster_id: 6603,
          title: "In Bed With The Enemy",
          subtitle: "Drama",
          image: "https://fastpix.vplushort.com/a/480/plain/discovery/1789651155_in-bed-with-the-enemy-S1-POSTER%20EN.jpg",
          schedule: "2026-09-21T07:00:00+07:00"
        },
        {
          cluster_id: 6603,
          title: "My Tragic Love Story With A Billionaire",
          subtitle: "Drama",
          image: "https://fastpix.vplushort.com/a/480/plain/discovery/1789463560_my-tragic-love-story-with-a-billionaire-S1-POSTER%20EN.jpg",
          schedule: "2026-09-21T07:00:00+07:00"
        }
      ]
    },
    {
      title: "You Might Like",
      properties: {
        type: "grid_2",
        item_type: "poster",
        hide_title: false
      },
      items: [
        {
          cluster_id: 6604,
          item_type: "recommendation",
          segmentation_name: "Arcane Realms",
          segmentation_items: [
            {
              title: "I Can Hear His Thoughts!",
              genre: "CEO Love Interest, Supernatural",
              image: "https://fastpix.vplushort.com/a/720/plain/catalog/1789672914_i-can-hear-his-thoughts-S1-POSTER%20EN.jpg"
            },
            {
              title: "My Zombie Mom",
              genre: "Hidden Identity, Survival",
              image: "https://fastpix.vplushort.com/a/720/plain/catalog/1789016493_my-zombie-mom-S1-POSTER%20EN.jpg"
            }
          ]
        }
      ]
    }
  ]
};