// this component will more or less mirror SongsList
// i'll add a "inProgress" boolean to the songs table which will default true
// logic for switching boolean to false will be embedded in the archive button in SongDetails


//!!!

/// it would seem that a POST to a new endpoint would make sense
// but that probably isn't really necessary here.  these are all just songs, just differentiated by completion status
// so the finished archive just needs to conditionally render what's false
// while the songsList component might need to get updated to conditionally render what's true
// or the other way around if the boolean we use is "finished" - which makes the most sense, probably.
import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './InactiveArchiveStyles';
import Feedback from '@material-ui/icons/Feedback';



//import songDetails from '../../redux/reducers/songDetails.reducer';


//**** use a conditional render that just maps thru songs and checks 
//for song.is_active===false.  if the loop catches anything it will render the list.
//otherwise, the greeting message. */

function InactiveArchive() {

    const { 
             
            title1, 
            player, 
            card,  
            paper, 
            menuDots,
            blankPage,
            message,
            messageCard,
            messageDiv,
            feedback,
            heading,
            playIcon, 
            hackButton
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector((store) => store.songs);

    
    
    console.log(songs);

    

    //get db info on page load
    useEffect(() => {
        
        dispatch({
            type: 'FETCH_SONGS'
        });
        
    }, []);
    //push forward to details page on click

    const handleClick = (songId) => {
        history.push(`/InactiveSongDetails/${songId}`)
    }

    const goBack = () => {
        history.push(`/InactiveArchive`)
    }
    




    //because there is no color-coding involved in the inactive archive, 
    //there's much less code to deal with and thus no need to refactor.
    //this conditional render eliminates the list view if no inactive songs are present. 
    //obviously needs cleanup, but works?
    return (
            <>
            <Box 
                        
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
            
                        {songs.map((song) => {
                        
                            return (
                            
                                        <>
                            
                                            {song.is_active === false ?
                                
                                                <>

                 
                    
                    <Paper className={paper} elevation={10}>
                        
                        <div 
                            
                            className={menuDots}>

                        </div>

                            <div>
                                
                                <Typography 
                                    
                                    variant="overline"
                                    className={heading}
                                >

                                    <span className={playIcon}>▶</span>     
                                    Inactive Songs
                                            
                                </Typography>
                                        
                            </div>
                        
                        
                                    
                                                        <Box paddingTop={2}>
                                            
                                                            <Card
                                                
                                                                raised={true}
                                                                className={card}
                                
                                                            > 
                                                
                                                                <section>

                                                                    <CardContent 
                                        
                                                                        item xs={1} key={song} 
                                                                        onClick={() => handleClick(song.song_id)} 
                                    
                                                                    >  
                                        
                                                                        <Typography 
                                                                            
                                                                            variant="overline" 
                                                                            className={title1}>{song.title}
                                                        
                                                                        </Typography>
                                            
                                                                    </CardContent>
                                    
                                                                </section>
                                                        
                                                                <section className={player}>
                                                    
                                                                    <AudioPlayer

                                                                        audioFiles={[{ src: song.preview_audio }]}

                                                                    />
                                                        
                                                                </section>

                                                            </Card> 

                                                        </Box>
                                    
                                                        <br></br>
                                                        <br></br>
                                     
                                                    
                     
                                                
                                                
                                            </Paper>
                        
                                            </>
                                        

                    :
                
                
                    <Paper className={blankPage}>
                        
                        <div>

                            <Card 
                                className={messageCard}
                                raised={true}
                            >
                            
                                <div>
                                    
                                    <Feedback className={feedback}/>
                                    
                                </div>
                            
                                    <div className={messageDiv}>
                                        
                                        <Typography
                            
                                            align="center"
                                            variant="h6"
                                            className={message}
                            
                                        >
                                        
                                            This inactive archive shows songs you've marked 
                                            as such when uploading.  It offers the option to catalog unfinished 
                                            material that hasn't been abandoned, but that is dormant for the moment.
                                            If you only see a blank page, there are currently no songs marked as inactive.

                                        </Typography>
                                    
                                    </div>
                            
                            </Card>

                            <Button 
                                onClick={goBack}
                                className={hackButton}
                                variant="outlined"
                                >See Archive
                            </Button>

                        </div>

                    </Paper>

                

                }
            </>

    );
            })}
            </Box>
            </>
    )

}

export default InactiveArchive;
