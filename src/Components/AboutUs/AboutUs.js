import './AboutUs.css'

const AboutUs = () => {
    return(
        <div className="container_about" style={{marginTop:"40px"}}>

    <div className="search-container_about">
        <button >&#128269;</button>
        <input type="text" className="search-input" placeholder="Search Plant"/>
        <img src="./image/flowersearch.png" alt='search' style={{width:"28px",height:"29px"}}/>
    </div>


    <div className="toggle-container">
        <button className="toggle-btn active">Plants</button>
        <button className="toggle-btn">Pots</button>
    </div>


    <div className="about-us">
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae. Architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
    </div>
</div>
    )
}

export default AboutUs;