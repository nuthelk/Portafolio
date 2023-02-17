import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { PageInfo, Skill, Project, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocial } from '@/utils/fetchSocials'
import { GetStaticProps } from 'next'


type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[]
;}

function Home({pageInfo, skills, projects, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#B343EF]'>
      <Head>
        <title>Portafolio Nuthelk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hola mundo</h1>

      {/* <Header socials={socials} />

      
      <section id="hero" className='snap-star'>
        <Hero pageInfo={pageInfo} />
      </section>

      
      <section id="about" className='snap-normal'>
        <About pageInfo={pageInfo} />
      </section>

      
      <section id="skills" className='snap-normal'>
        <Skills skills={skills} />
      </section>

      
      <section id="projects" className='snap-normal'>
        <Projects projects={projects} />
      </section>

      
      <section id='contactme'>
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer" >
        <div className='flex items-center justify-center'>
          <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1675984647/Pollito_Enojado_anime_version_d7b351c9-0871-4b5e-b0e6-2cd303dab22b_myhay7.png" alt="" className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' />
        </div>
      </footer>
      </Link> */}
      
    </div>
  )
}

// a

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocial();

//   return {
//     props:{
//       pageInfo,
//       skills,
//       projects,
//       socials
//     },
//     revalidate: 10,
   
//   }
// }

export default Home