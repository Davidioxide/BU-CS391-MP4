
import styled from "styled-components";
import getData from "@/get/getData";

const StyledDiv = styled.div`
    min-width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction: row;
    gap: 2vw;
    justify-content: center;
    align-items: center;
    
`
const StyledCard = styled.div`
    padding:2%;
    border-radius:10px;
    background-color: lightblue;
    font-weight:bold;
`
export default async function Home() {
    const { data } = await getData();
    console.log(data.length);
    return (
        <StyledDiv>
            {data.slice(0, 1).map((item) => (
                <>
                    <StyledCard>
                        <div key={item.id} className="card">
                            <h2>{item.name}</h2>

                            <h1>Author: {item.author.name}</h1>
                            {/*<img src={item.author.avatar} alt={item.author.name} width={50} />*/}

                            <p>Style: {item.style.name}</p>
                            <p>Family: {item.family.name}</p>

                            <div>
                                {item.thumbnails.map((thumb, index) => (
                                    <img
                                        key={index}
                                        src={thumb.url}
                                        width={thumb.width}
                                        height={thumb.height}
                                        alt="thumbnail"
                                    />
                                ))}
                            </div>

                            {/*<div>*/}
                            {/*    {item.tags.map((tag, index) => (*/}
                            {/*        <span key={index}>{tag.name}</span>*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                        </div>
                        <div>
                        </div>
                    </StyledCard>
                    <StyledCard>
                        <h1>Hi, this is a website that allows you to fetch different pics!</h1>
                        <p>the box in my left shows a potential fetch from the API</p>
                        <p>Have fun in trying it out yourself (although, the fetching is not ranomd, and will return the same thing)</p>
                    </StyledCard>
                </>
            ))}
        </StyledDiv>
    );
}
