
import styled from "styled-components";
import getData from "@/get/getData";

const StyledDiv = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    //grid-template-rows: auto;
    grid-gap: 1em;
    padding:20px;
    
`
const StyledCard = styled.div`
    padding:2%;
    border-radius:10px;
    background-color: lightblue ;
    font-weight:bold;
    //word-wrap: break-word;
    //overflow-wrap:break-word;
`
export default async function Home() {
    const { data } = await getData();
    console.log(data.length);
    return (
        <StyledDiv>
            {data.slice(0, 12).map((item:any) => (
                <StyledCard>
                    <div key={item.id} className="card">
                        <h2>{item.name}</h2>

                        <h1>Author: {item.author.name}</h1>
                        {/*<img src={item.author.avatar} alt={item.author.name} width={50} />*/}

                        <p>Style: {item.style.name}</p>
                        <p>Family: {item.family.name}</p>

                        <div>
                            {item.thumbnails.map((thumb:any, index:any) => (
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
                </StyledCard>
            ))}
        </StyledDiv>
    );
}
