import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useState, useEffect } from "react";

//https://api.github.com/users/frantecbh/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repositories, setRepostories] = useState<Repository[]>([])

    useEffect(()=>{

            fetch('https://api.github.com/users/frantecbh/repos')
                .then(response => response.json())
                .then(data => setRepostories(data))        

    },[])

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {
                    repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository}/>
                    })
                }
                
               
            </ul>
        </section>
    )
}