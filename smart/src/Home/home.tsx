import Header from '../Components/Header/header'
import Main from '../Components/Main/main'
import How from '../Components/How/how'
import Partners from '../Components/Partners/partners'
import Feature from '../Components/Features/feature'
import Team from '../Components/Team/team'
export const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <Header/>
      <main className="pb-20">
        <Main/>
        <How/>
        <Partners/>
        <Feature/>
        <Team/>
      </main>
    </div>
  )
}
