import React, { Component } from 'react';
import Card from '../../components/Card';
import './Pokemon.css';
const POKEMON_URL = 'https://pokeapi.co/api/v2/';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        const endpoint = POKEMON_URL + 'pokemon/?offset=0&limit=10';
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log('@data: ', data)
                const results = data && data.results || [];
                console.log('@results: ', results);
                this.setState({ pokemon: results });
            });
        // async function fetchData(self) {
        //     const endpoint = SWAPI_URL + 'people/';
        //     const res = await fetch(endpoint);
        //     const data = await res.json();
        //     console.log('@data: ', data)
        //     const results = data && data.results || [];
        //     console.log('@results: ', results);
        //     self.setState({ people: results });
        // }
        // fetchData(this);
    }

    render() {
        return (
            <div className="home">
                <section className="app__people">
                    {
                        this.state.pokemon.map((p, index) => {
                            return (
                                <Card name={p.name}
                                    // birth_year={p.birth_year}
                                    // gender={p.gender}
                                    key={index} />
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Pokemon;