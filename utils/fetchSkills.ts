import { Skill } from '../typings';
import axios from 'axios';


export const fetchSkills = async() => {

    try {
      const res = await fetch(`http://localhost:3000/api/getSkills`)
      const data = await res.json()
      const skills: Skill[] = data.skills
  
      return skills
    } catch (error) {
      console.log(error)
    }
}

// export const fetchSkills = async () => {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
//     const skills: Skill[] = res.data.skills;
  
//     return skills;
//   }