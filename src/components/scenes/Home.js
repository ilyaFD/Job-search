import React from "react";
import { getJobs } from "../../providers/jobs";
import * as S from '../ui/index.styled';
import {ListItem} from "../ui/";

export default function Home () {
    const [fetchedJobs, setFetchedJobs] = React.useState([]);
    const [jobs, setJobs] = React.useState([]);
    const [ready, setReady] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        async function fetchJobs() {
            const jobs = await getJobs();
            jobs && setFetchedJobs(jobs);
            setReady(true);
        }
        fetchJobs();
    }, [])

    const searchHendler = value => {
        const newJobs = fetchedJobs.filter(item => {
            const title = item.title.toLowerCase();
            const lowerCasedVal = value.toLowerCase();
            return title.includes(lowerCasedVal)
        })
        setSearchValue(value)
        setJobs(newJobs)
    }

    const renderItems = items => {
        return items.map((item, index) => <ListItem {...item} key={`${item}  ${index}`}/>)
    }

    if (!ready) return <S.Loader>Loading ...</S.Loader>

    return (
        <S.Container>
            <S.Title>Find a job</S.Title>
            <S.Input
                value={searchValue}
                onChange={e => searchHendler(e.target.value)}
                placeholder="Search for a job"
            />
            <S.ListHeader>
                {`Found ${searchValue ? jobs.length : fetchedJobs.length} vacancies`}
            </S.ListHeader>
                {searchValue ? renderItems(jobs) : renderItems(fetchedJobs)}
        </S.Container>
    );
}
