import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const About = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`; 
    }, []);

    return (
        <main>
            <section>
                <h2>About Page</h2>
                <article>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quas modi cupiditate iusto? Placeat, molestias expedita tempora error cumque similique amet natus eum nesciunt doloribus totam, incidunt ducimus dolores optio!</p>
                </article>
            </section>
        </main>
    );
}

export default About;