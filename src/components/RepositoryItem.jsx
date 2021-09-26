

export function RepositoryItem(props){
    return(
                <li>
                    <strong>{props.repository.name ?? 'Defaut'}</strong>
                    <p>{props.repository.description}</p>
                    <a href={props.repository.html_url}>Acessar reṕositorio</a>
                </li>
    )
}