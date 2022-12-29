# **About the back**
  This back have authentication, crud, rules, etc...

## Graphql
  Graphql was created to solve two problems: **Under fetching** and **Over fetching** <br/>
  **Under fetching:** performs many requests<br/>
  **Over fetching:** perform unnecessary requests

## Query
  - responsible for requesting information. **method: GET**

## Mutation
  - responsible for create, change, delete. **method: POST - PUT - DELETE**

## Rule
  **Pagination** *slice(0, 12)* after more request *slice(13, 24)*
  **Upload files:** ***video*** ***image*** ***multiple files***

  **[75%] HOME:** will have four items: ***recently*** - ***popular*** - ***keep_watching*** - ***playlist***
  - **[✔] recently:** get recently posted videos.<br>
  - **[✔] popular:** get popular videos of the week.<br>
  - **[] keep_watching:** get unfinished videos.<br>
  - **[✔] playlist:** get playlist made by the community<br>

  **[0%] Play Video:**
  - **[✔] Related Videos**

  **[0%]Profile**
  - Ao criar uma conta, o profile deve ser criado automático

# **Insomnia**
  $.recently[?(@.userId.match(/d9b3ca04-b3c9-493b-b2ac-c51b5bf3f8e3/i))]

  <!-- 
  [
  {
    "id": 35236,
    "userId": "eb2cca91-d5e7-4f63-84a9-8832966e06f3",
    "like": 302,
    "dislike": 12,
    "width": 665,
    "height": 665,
    "title": "Playing with my favorite toy",
    "description": "your gamer girl longing for your solace",
    "views": 265231,
    "folderName": "belle_delphine",
    "files": {
      "video": {
        "public_id": "pegi_eighteen/belle_delphine/JOoyinEx_720p_jlxke8",
        "type": "video",
        "url": "v1669772857/pegi_eighteen/belle_delphine/JOoyinEx_720p_jlxke8.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/belle_delphine/JOoyinEx_720p_jlxke8_preview_ctjvbx",
        "type": "image",
        "url": "v1669922778/pegi_eighteen/belle_delphine/JOoyinEx_720p_jlxke8_url_ctjvbx.jpg"
      }
    },
    "type_media": "video",
    "create_at": "2022-11-30T18:12:46-03:00"
  },
  {
    "id": 52321,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 1548,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 6531,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_bad5d2fd850bc5605be4fb9b951729dc_tkxxgj.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_bad5d2fd850bc5605be4fb9b951729dc_tkxxgj.jpg",
    "create_at": "2022-10-05T18:12:46-03:00"
  },
  {
    "id": 95124,
    "userId": "3d061624-91b2-424a-a3fb-51e5fd9470c3",
    "folderName": "meme",
    "like": 498,
    "dislike": 12,
    "width": 498,
    "height": 665,
    "title": "Shoto Todoroki",
    "description": "your gamer girl longing for your solace",
    "views": 965621,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669757378/pegi_eighteen/feh_galvao/9vt9F5Gn_qypbjc.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669757378/pegi_eighteen/feh_galvao/9vt9F5Gn_qypbjc.jpg",
    "create_at": "2022-11-26T18:12:46-03:00"
  },
  {
    "id": 14123,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 3265,
    "dislike": 12,
    "width": 648,
    "height": 648,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 0,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_def9683b89ba26a2b181a11b25308e52e3c0c9a2ebc541ee_mqxubf.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_def9683b89ba26a2b181a11b25308e52e3c0c9a2ebc541ee_mqxubf.jpg",
    "create_at": "2022-11-05T18:12:46-03:00"
  },
  {
    "id": 15487,
    "userId": "eb2cca91-d5e7-4f63-84a9-8832966e06f3",
    "like": 502,
    "dislike": 12,
    "width": 665,
    "height": 665,
    "title": "Ride on the toy",
    "description": "your gamer girl longing for your solace",
    "views": 0,
    "folderName": "belle_delphine",
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_b3215835e1330cf3b349cabea2521f492ce1ad5e0a2214a9_npu9l2.jpg"
      }
    },
    "type_media": "video",
    "create_at": "2022-11-28T18:12:46-03:00"
  },
  {
    "id": 56564,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 456,
    "dislike": 12,
    "width": 648,
    "height": 648,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 0,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_b3215835e1330cf3b349cabea2521f492ce1ad5e0a2214a9_npu9l2.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_b3215835e1330cf3b349cabea2521f492ce1ad5e0a2214a9_npu9l2.jpg",
    "create_at": "2022-11-05T18:12:46-03:00"
  },
  {
    "id": 96325,
    "userId": "3d061624-91b2-424a-a3fb-51e5fd9470c3",
    "folderName": "meme",
    "like": 2022,
    "dislike": 12,
    "width": 374,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 0,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1669772449/pegi_eighteen/feh_galvao/37NlWGFG_720p_qhesii.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "https://res-console.cloudinary.com/zasetrewsqw/thumbnails/v1/video/upload/v1669772449/cGVnaV9laWdodGVlbi9mZWhfZ2FsdmFvLzM3TmxXR0ZHXzcyMHBfcWhlc2lp/url"
      }
    },
    "type_media": "video",
    "create_at": "2022-11-30T18:12:46-03:00"
  },
  {
    "id": 85698,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 584,
    "dislike": 12,
    "width": 665,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 74,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819877/pegi_eighteen/jessica_beppler/Screenshot_20220310-225112_Chrome_3432416_ha3biw.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819877/pegi_eighteen/jessica_beppler/Screenshot_20220310-225112_Chrome_3432416_ha3biw.jpg",
    "create_at": "2022-11-16T18:12:46-03:00"
  },
  {
    "id": 52321,
    "userId": "eb2cca91-d5e7-4f63-84a9-8832966e06f3",
    "like": 320,
    "dislike": 12,
    "width": 1237,
    "height": 655,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 60,
    "folderName": "belle_delphine",
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1669772861/pegi_eighteen/belle_delphine/pDNIq04W_720p_exbguv.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669922778/pegi_eighteen/belle_delphine/pDNIq04W_720p_exbguv_url_ejtkqb.jpg"
      }
    },
    "type_media": "video",
    "create_at": "2022-11-27T18:12:46-03:00"
  },
  {
    "id": 59753,
    "userId": "3d061624-91b2-424a-a3fb-51e5fd9470c3",
    "folderName": "meme",
    "like": 963,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 78,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669772447/pegi_eighteen/feh_galvao/tmHucN8q_eoaw6b.jpg"
      }
    },
    "type_media": "video",
    "url": "v1669772447/pegi_eighteen/feh_galvao/tmHucN8q_eoaw6b.jpg",
    "create_at": "2022-10-30T18:12:46-03:00"
  },
  {
    "id": 65987,
    "userId": "eb2cca91-d5e7-4f63-84a9-8832966e06f3",
    "like": 602,
    "dislike": 12,
    "width": 1237,
    "height": 655,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "folderName": "belle_delphine",
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1669772629/pegi_eighteen/belle_delphine/MFwSbTfA_720p_pnkehf.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669922778/pegi_eighteen/belle_delphine/MFwSbTfA_720p_pnkehf_url_f8mfzt.jpg"
      }
    },
    "type_media": "video",
    "create_at": "2022-11-28T18:12:46-03:00"
  },
  {
    "id": 12345,
    "userId": "eb2cca91-d5e7-4f63-84a9-8832966e06f3",
    "like": 1182,
    "dislike": 12,
    "width": 1182,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "folderName": "belle_delphine",
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1669772853/pegi_eighteen/belle_delphine/GNDff3KS_720p_mrwsno.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669922778/pegi_eighteen/belle_delphine/GNDff3KS_720p_mrwsno_url_k3tjij.jpg"
      }
    },
    "type_media": "video",
    "create_at": "2022-11-15T18:12:46-03:00"
  },
  {
    "id": 15487,
    "userId": "3d061624-91b2-424a-a3fb-51e5fd9470c3",
    "folderName": "meme",
    "like": 159,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669772446/pegi_eighteen/feh_galvao/6Ce1rZQp_hraymx.jpg"
      }
    },
    "type_media": "video",
    "url": "v1669772446/pegi_eighteen/feh_galvao/6Ce1rZQp_hraymx.jpg",
    "create_at": "2022-11-10T18:12:46-03:00"
  },
  {
    "id": 65369,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 150,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819878/pegi_eighteen/jessica_beppler/960x960_07e80ad98baf291999bb7ba9db1e825b_a5y9yw.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819878/pegi_eighteen/jessica_beppler/960x960_07e80ad98baf291999bb7ba9db1e825b_a5y9yw.jpg",
    "create_at": "2022-10-10T18:12:46-03:00"
  },
  {
    "id": 11420,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 357,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819878/pegi_eighteen/jessica_beppler/960x960_8c9004adbc3207b5fd6df35028759476_umygy4.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819878/pegi_eighteen/jessica_beppler/960x960_8c9004adbc3207b5fd6df35028759476_umygy4.jpg",
    "create_at": "2022-10-11T18:12:46-03:00"
  },
  {
    "id": 22356,
    "userId": "3d061624-91b2-424a-a3fb-51e5fd9470c3",
    "folderName": "meme",
    "like": 665,
    "dislike": 12,
    "width": 1182,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1669772450/pegi_eighteen/feh_galvao/1XOZEABq_720p_yuay9h.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": ""
      }
    },
    "type_media": "video",
    "create_at": "2022-11-08T18:12:46-03:00"
  },
  {
    "id": 88563,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 852,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819878/pegi_eighteen/jessica_beppler/960x960_38f10f49eb5ef5058cdb9c2025a955ed_agzlcr.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819878/pegi_eighteen/jessica_beppler/960x960_38f10f49eb5ef5058cdb9c2025a955ed_agzlcr.jpg",
    "create_at": "2022-09-11T18:12:46-03:00"
  },
  {
    "id": 77569,
    "userId": "3d061624-91b2-424a-a3fb-51e5fd9470c3",
    "folderName": "meme",
    "like": 333,
    "dislike": 12,
    "width": 1182,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1669772449/pegi_eighteen/feh_galvao/3OOj3MNL_720p_zddpjr.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": ""
      }
    },
    "type_media": "video",
    "create_at": "2022-11-01T18:12:46-03:00"
  },
  {
    "id": 56898,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 426,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_0cf8dabaab5699d3d4ad6d582b8072c9_xnbozp.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_0cf8dabaab5699d3d4ad6d582b8072c9_xnbozp.jpg",
    "create_at": "2022-09-30T18:12:46-03:00"
  },
  {
    "id": 55696,
    "userId": "ca691272-0bfd-4a8b-9115-27d668c12628",
    "folderName": "meme",
    "like": 956,
    "dislike": 12,
    "width": 1319,
    "height": 665,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1671628368/pegi_eighteen/meme/garotinha.mp4"
      },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_a8e181e4c49bf54d3f40dfe87530dd6832c35114122286cf_vn2ijg.jpg"
      }
    },
    "type_media": "photo",
    "url": "v1669819877/pegi_eighteen/jessica_beppler/960x960_a8e181e4c49bf54d3f40dfe87530dd6832c35114122286cf_vn2ijg.jpg",
    "create_at": "2022-09-30T18:12:46-03:00"
  },
  {
    "id": 66598,
    "userId": 8532,
    "folderName": "meme",
    "like": 456,
    "dislike": 12,
    "width": 854,
    "height": 480,
    "title": "Teste",
    "description": "your gamer girl longing for your solace",
    "views": 38,
    "files": {
      "video": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "video",
        "url": "v1669828785/pegi_eighteen/mia_khalifa/ceg8H9Bh_720p_gi3ijy.mp4"
    },
      "image": {
        "public_id": "pegi_eighteen/meme/garotinha",
        "type": "image",
        "url": "v1669924765/pegi_eighteen/mia_khalifa/ceg8H9Bh_720p_gi3ijy_url_shet10.jpg"
      }
    },
    "type_media": "video",
    "create_at": "2022-11-19T18:12:46-03:00"
  }
]
  
   -->