
export const CalendarWrapper = styled.div`
  color: #fff; 
  width: 1000px;
  margin: 20px;
  margin-top: 5px;
  @media (max-width: 1200px){
    align-items: flex-start;
    width: 800px;
  }

  @media (max-width: 1100px){
    align-items: flex-start;
    width: 600px;
  }

`;

export const EditorWrapper = styled.div`
    width: 400px;
    color: ${colors['primary-text']};
    display: flex;
    flex-direction: column;
    padding: 30px;

    @media (max-width: 600px) {
        margin: 10px;
        height: 100%;
    };    
`

export const RecordText = styled.span`
    colors: ${colors['primary-text']};
    padding-top: 20px;
`

export const Title = styled.span`
    colors: ${colors['primary-text']};
    padding-top: 20px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: row;
`

