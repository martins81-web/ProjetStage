import { toAbsoluteUrl } from '../../../../_metronic/_helpers';

export default [
  {
    id: 1,
    username: 'hcloutier',
    password: 'Admin123!',
    entreprise: '',
    email: 'hugo.cloutier@cegeptr.qc.ca',
    accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
    refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
    roles: [1], // coordonnateur
    pic: toAbsoluteUrl('/media/users/300_21.jpg'),
    fullname: 'Hugo Cloutier',
    firstname: 'Hugo',
    lastname: 'Cloutier',
  },
  {
    id: 2,
    username: 'vbaylly',
    password: 'vincent',
    entreprise: '',
    email: 'vincent@demo.com',
    accessToken: 'access-token-6829xxa69dd3421d8762-991e9e806dbf',
    refreshToken: 'access-token-f8e4c61a318g4d618b6c199ef96b9t55',
    roles: [2], // tuteur
    pic: toAbsoluteUrl('/media/users/100_2.jpg'),
    fullname: 'Vincent Baylly',
    firstname: 'Vincent',
    lastname: 'Baylly',
  },
  {
    id: 3,
    username: 'entrepriseXYZ',
    password: 'entreprise',
    entreprise: '',
    email: 'entreprise@demo.com',
    accessToken: 'access-token-d2dff7b82f784rf584b60964abbe45b9',
    refreshToken: 'access-token-c999ccfe74aa40d0bb1a64c5e620c1a5',
    roles: [3], // entreprise
    pic: toAbsoluteUrl('/media/users/default.jpg'),
    fullname: 'Manu G',
    firstname: 'Manu',
    lastname: 'Ginobili',
  },
  {
    id: 4,
    username: 'emartins',
    password: 'stagiaire',
    entreprise: 'entrepriseXYZ',
    email: 'ericmartins81@gmail.com',
    accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5bb',
    refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90cc',
    roles: [4], // stagiaire
    pic: toAbsoluteUrl('/media/users/default.jpg'),
    fullname: 'Eric Martins',
    firstname: 'Eric',
    lastname: 'Martins',
  },
  {
    id: 5,
    username: 'cEtienne',
    password: 'stagiaire',
    entreprise: 'entrepriseXYZ',
    email: 'charlesEtienne@gmail.com',
    accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5bb',
    refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90cc',
    roles: [4], // stagiaire
    pic: toAbsoluteUrl('/media/users/default.jpg'),
    fullname: 'Charles Étienne',
    firstname: 'Charles',
    lastname: 'Étienne',
  },
];
