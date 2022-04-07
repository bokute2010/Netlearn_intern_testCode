import React, { useEffect, useState } from 'react'
import './index.css'

import axios from 'axios';
import JokeRender from './JokeRender';
import { Alert, Button, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { baseURL } from '../shared/baseUrl';
import { Loading } from './Loading';

function Main() {


    const [joke, setJoke] = useState();
    const [number, setNumber] = useState(0);
    const [totalStories, setTotalStories] = useState();

    const [reaction, setReaction] = useState({
        like: null,
        jokeId: null
    })

    function handleStoryChange(newStoryNum, like, jokeId) {
        //console.log(newStoryNum)
        setReaction({ like: like, jokeId: jokeId })
        if (number <= totalStories) {
            setNumber(newStoryNum)
        }
    }

    // useEffect(() => {
    //     console.log(reaction)
    //     async function postReaction() {
    //         await axios.put(baseURL, reaction)
    //     }
    //     postReaction()

    // }, [reaction])

    useEffect(() => {
        async function fetchJokeStories() {
            await axios.get(`${baseURL}?number=${number}`)
                .then(response => response.data)
                .then(data => {
                    setJoke(data.story)
                    setNumber(number)

                    setTotalStories(data.totalStories)
                })
        }
        fetchJokeStories();

        async function postReaction() {
            await axios.put(baseURL, reaction)
        }
        postReaction()

    }, [number])

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)


    const [newJoke, setNewJoke] = useState('');

    function handleAddJoke() {
        const newStory = document.getElementById('newJoke').value;
        if (newStory.length > 0) {
            setNewJoke(newStory);
        }
        toggle()
    }

    useEffect(() => {
        if (newJoke.length > 0) {
            async function addJokeFunc() {
                await axios.post(baseURL, { newStory: newJoke })
                    .then(response => {
                        return setJoke(response.data)
                    })
            }
            //console.log(newJoke);
            addJokeFunc()
        }

    }, [newJoke])


    return (
        <div className="container">
            <h4 onClick={toggle} className='text-success mt-4 text-end'>Add Joke</h4>
            <header className='row  px-5 my-5 text-center'>
                <h2>A joke a day keeps the doctor away</h2>
                <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
                <hr></hr>
            </header>

            {joke ? <JokeRender
                totalStories={totalStories}
                onStoryChange={handleStoryChange}
                joke={joke}
                number={number} /> : null}

            {!joke ?
                <div className='container text-center'>
                    <Alert color='secondary'>
                        "That's all the jokes for today! Come back another day!"
                    </Alert>
                    <Button onClick={() => { setNumber(0) }} >
                        Read again
                    </Button>
                </div> : null}

            <Modal isOpen={isOpen}>
                <ModalHeader toggle={toggle}>
                    ADD JOKE STORY
                </ModalHeader>
                <ModalBody>
                    <Input required id='newJoke' type='textarea' />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => handleAddJoke()} color='primary'>Add</Button>
                </ModalFooter>
            </Modal>


        </div>

    )
}

export default Main