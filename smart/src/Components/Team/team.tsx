import Marquee from 'react-fast-marquee'
import Priyansh from '../../assets/Priyansh.jpg' 
import Gyanesh from '../../assets/Gyanesh.jpg'
import Altamash from '../../assets/Altamash.jpg'
import Yash from '../../assets/Yash.jpg'
import Rai from '../../assets/Rai.jpg'

export default function Team() {
    const teamMembers = [
        { name: 'Priyansh Neel', img: Priyansh, des: 'IoT & AI Specialist' },
        { name: 'Gyanesh Rai', img: Gyanesh, des: 'Lead Product Designer' },
        { name: 'Altamash Beg', img: Altamash, des: 'Front-End Developer' },
        { name: 'Yash Bhushan Pandey', img: Yash, des: 'Front-End Developer' },
        { name: 'Priyansh Kumar Rai', img: Rai, des: 'Back-End Developer' },        
      ];
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Meet the team</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">People behind Smart Bazaar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A cleaner team section keeps the human side of the project while matching the updated visual style.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <Marquee pauseOnHover gradient={false} speed={35}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative mx-3 h-[28rem] w-[18rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-left text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{member.des}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
