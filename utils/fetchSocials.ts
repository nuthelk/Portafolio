import { Social } from '../typings';
import axios from 'axios';


export const fetchSocial = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/getSocials`)
      const data = await res.json()
      const socials: Social[] = data.socials;
  
      return socials
    } catch (error) {
      console.log(error)
    }
}

// export const fetchSocial = async () => {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
//     const socials:Social[] = res.data.socials;
  
//     return socials;
//   }