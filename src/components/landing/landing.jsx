import Header from "./header";
import Features from "./features";
import Hero from "./hero";
import Testimonials from "./testimonials";
import Prices from "./prices";
import { Fade } from "react-awesome-reveal";

function Landing() {
    return(
        <div>
            <Header />
            <Hero /> 
            <Features />
                <Fade cascade damping={1e-1} duration={1000}>
                <Testimonials />
                </Fade>
            <Prices />
        </div>
    )
}

export default Landing