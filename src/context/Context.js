import React,{useState,useEffect,createContext,useContext} from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) =>{
    const [dealsid,setDealsId] = useState([]);
    const [deals,setDeals] = useState();
    const [issuername, setIssuerName] = useState([]);
    const [financername, setFinancerName] = useState([]);

    const GetDeals = async() =>{
        console.log(dealsid);
        try{
          const data = await axios.post("https://investmentportal.herokuapp.com/getalldeals");
          console.log(data.data.data);
          setDeals(data.data.data);
          for(let i=0; i<data.data.data.length; i++){
            //console.log(data.data.data[i].Issuer_Name);
            setIssuerName(preData=>[...preData,data.data.data[i].Issuer_Name]);
            setFinancerName(preData=>[...preData,data.data.data[i].Financer]);
            //console.log(data.data.data[i].Financer);
          }
        }catch(error){
          console.log(error);
        }
    
    }

    useEffect(()=>{
        GetDeals();

    },[]);

    return(
        <AppContext.Provider value={{
            deals,
            setDealsId,
            issuername,
            financername,
            setIssuerName,
            setFinancerName
        }}>{children}</AppContext.Provider>
    )
    
};

export const AppState = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider};