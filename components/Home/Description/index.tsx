import React, { FC, ReactElement } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import styles from './Description.module.css';
import Image from 'next/image';

const Description: FC = (): ReactElement => {

    return (
        <>
            <Container className="mb-25 ta-c">
                <Typography variant='h2'>Bimba Art Stories</Typography>
                <Typography variant='h5'>Our Art Blogs | Every Art & Artist Inscribes a Story..</Typography>
            </Container>
            <Grid item container spacing={2} className="p-50">
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className={styles.image}>
                    <Image src='/pro20.webp' alt="proudct-description" fill />
                </Grid>
                <Grid item xs={12} md={12} lg={8}>
                    <Typography variant='h3'>FAMOUS FESTIVALS THAT ARE DEPICTED IN PICHWAI PAINTINGS</Typography>
                    <p className="ta-j">The famous Pichwai art is one of the most auspicious forms of Indian art that one can own. A Pichwai painting finds its origins in Nathdwara, Rajasthan, and usually depicts the idol of Lord Krishna in the form of a 7-year-old, known as Shrinath Ji. These are intricately done cloth paintings that are used behind the idol of Shrinath Ji and have now made their way into the modern world and into our homes as an art form.
                        Apart from the idol of Shrinath Ji, famous Pichwai art also depicts motifs that are related to Shrinath Ji himself like lotus, cows, peacocks, and gopis. What is also depicted in these Pichwai artworks are various auspicious festivals related to Lord Krishna. Here are the most reoccurring festivals depicted in Pichwai famous paintings; </p>
                    <p className="ta-j"><b>Janmashtami</b>
                        The most revered and celebrated festival depicted in Pichwais is Janmashtami; Janmashtami is a festival that celebrates the birth of Lord Krishna. One of the largest Hindu festivals in India, on this day the idol of Lord Krishna is bathed in milk, curd, ghee, and honey. People pray, fast, and visit Lord Krishna’s temples to offer their prayers.
                        Usually in famous pichwai art, Shrinath Ji is shown to be in the middle of the painting, dressed elaborately with a peacock feather on his crown. Pichwai paintings that depict the festival of Janmasthami show Shrinath Ji in a cradle while celebrations unfold around him and people surrounding him eagerly to get a glimpse. Most of the Pichwai painting always show the Shrinath Ji durbar being attended by two priests who are offering their prayers and the intended festival or occasion is shown taking place beneath the idol.
                    </p>
                    <span>Read More...</span>
                </Grid>
            </Grid>
        </>
    )
}

export default Description