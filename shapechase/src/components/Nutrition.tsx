import styled from 'styled-components'


const Nutrition = () => {
    return (
        <>
            <StyledGridContainer>
                <div className="grid_item grid_header">
                    <h2> Nutrition </h2>
                </div>
                <div className="grid_item">Daily Protein </div>
                <div className="grid_item">Daily Carbs </div>
                <div className="grid_item">Daily Fat </div>
                <div className="grid_item grid_item_4">Daily Calorie</div>
                <div className="grid_item grid_item_5">Calculate daily macros based on goals</div>
            </StyledGridContainer>
        </>
        )
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

export default Nutrition
    