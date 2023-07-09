import { Banner, Clients, Intro, LetsTalk, Services } from "../components";

export default function Home() {
  return (
    <div className="app_container">
      <Banner />
      <Intro/>
      <Services/>
      <Clients />
      <LetsTalk />
    </div>
  );
}
