import {
  FCKontakt,
  FContentAdress,
  FContentHeaders,
  FCOpeningHours,
} from '../TextComponents/FooterContent';

export interface IFooterDIV {
  Header: string;
  content: Adress | Kontakt | OpeningsHours;
}

interface Adress {
  name: string;
  adress: string;
  postadress: string;
}
interface Kontakt {
  telenummer: string;
  mobil: string;
  email: string;
}
interface OpeningsHours {
  mondaytothursday: string;
  friday: string;
  special?: string;
}
