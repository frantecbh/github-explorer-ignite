

export function RepositoryItem(props){
    return(
                <li>
                    <strong>{props.repository.name ?? 'Defaut'}</strong>
                    <p>{props.repository.description}</p>
                    <a href={props.repository.link}>Acessar reṕositorio</a>
                </li>
    )
}