import { PageInfo } from '../typings';
import axios from 'axios';


// export const fetchPageInfo = async() => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
//     const data = await res.json()
//     const pageInfo: PageInfo = data.pageInfo;

//     return pageInfo
// }

export const fetchPageInfo = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const pageInfo:PageInfo = res.data.pageInfo;
  
    return pageInfo;
  }