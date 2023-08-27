import { Banner, Clients, Intro, LetsTalk, Services  , Marque, Testimonial} from "../components";

export default function Home() {
  return (
    <div className="app_container">
      {/* <Banner />
      <Intro/>
      <Services/>
      <Clients />
      <Marque/> */}
      <Testimonial/>
      <LetsTalk />
    </div>
  );
}
