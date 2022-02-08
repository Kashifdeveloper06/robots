import { styled } from "@mui/material/styles";

 export const MyCardComponent = styled('div')(({ theme }) => ({
    "& .price-setting": {
        float: "right",
      
    },
    "& .add-to-cart ":{
        textTransform: "capitalize",
                      fontSize: "15px",
    },
    "& .addcard":{
        maxWidth: "240px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    "& .inputs-card":{
        width: "100%", borderRadius: "7px"
    },
    
    "& .enter-btn":{
      paddingLeft: "100px",
      paddingRight: "100px",
     textTransform: "capitalize",
      fontSize: "15px",
    },
    " & .btn-box":{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:"14px"
          },
          
     "& .card-name":{
        fontSize: "20px",
        fontWeight:"600px",
          },
    "& .card-price":{
        
        color: "red",
        marginTop:"4px"
    },
    "& .card-type":{

    },
    
          

}));