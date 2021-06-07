import styled from 'styled-components'

const CardContainer = () => {
  return (
    <StyledGridContainer>
        <div className="grid_item grid_header"></div>
        <div className="grid_item">Randomized educational tips!</div>
        <div className="grid_item">Link to todays workout program! <br></br>(calendar, with current workout highlighted + previous missed/done workouts) </div>
        <div className="grid_item">Depending on goal: if muscle growth - You've gained x amount of weight since starting! </div>
        <div className="grid_item grid_item_4">Explore new exercises! </div>
        <div className="grid_item grid_item_5">Explore pre-defined programs! </div>
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  & {
    display: grid;
    grid-gap: 1em;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 3fr;
    height: 80vh;  

    .grid_header {
      grid-column: span 3;
    }

    .grid_item_5 {
      grid-column: 2 / 4;
    }

    .grid_item {
      align-content: center;
      text-align: center;
      border: 1px solid white;
      display: grid;
      grid-gap:10px;
      padding: 1em;
      border-radius: 10px;

      div {
        border: 1px solid white;

      }
    }
  }
`

export default CardContainer;
