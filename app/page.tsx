import { Banner, Clients, Intro, LetsTalk, Services  , Marque} from "../components";

export default function Home() {
  return (
    <div className="app_container">
      <Banner />
      <Intro/>
      <Services/>
      <Clients />
      <Marque/>
      <LetsTalk />
    </div>
  );
}
