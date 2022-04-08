import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'reactstrap';
function JokeRender({ joke, number, onStoryChange, totalStories }) {
    async function handleReaction(nextStoryNum, like, jokeId) {
        onStoryChange(nextStoryNum, like, jokeId)
    }

    return (
        <>
            <main className='row px-5 text-start'>
                <p>
                    {joke.story}
                </p>
                <div className='col-md-1 col-sm-2 col-xs-6'>
                    <FontAwesomeIcon icon={faThumbsUp} /> {joke.like}
                </div>
                <div className='col-md-1 col-sm-2 col-xs-6'>
                    <FontAwesomeIcon icon={faThumbsDown} /> {joke.dislike}
                </div>
            </main>

            <div className='row px-5 mt-3 text-center'>
                <div className='col-lg-3 col-md-1 col-xs-0' >
                </div>
                <div className='col-lg-3 col-md-5 col-xs-6 mt-2' >
                    <Button onClick={() => handleReaction(number + 1, true, joke._id)} block color="success" outline >
                        This is funny!
                    </Button>
                </div>

                <div className='col-lg-3 col-md-5 col-xs-6 mt-2' >
                    <Button onClick={() => handleReaction(number + 1, false, joke._id)} block color="danger" outline >
                        This is not funny!
                    </Button>
                </div>
                <div className='col-lg-3 col-md-1 col-xs-0' >
                </div>

            </div>
        </>
    )
}

export default JokeRender