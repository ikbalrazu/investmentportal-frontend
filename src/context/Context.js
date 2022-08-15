import React,{useState,useEffect,createContext,useContext} from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) =>{
    const [dealsid,setDealsId] = useState([]);
    const [deals,setDeals] = useState([]);
    const [issuername, setIssuerName] = useState([]);
    const [financername, setFinancerName] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));

    const GetDeals = async() =>{
        //console.log(userInfo?.id);
        try{
          const id = userInfo?.id;
          const data = await axios.post("https://investmentportal.herokuapp.com/getrecordbyid",{id});
          console.log(data?.data?.data?.Deals_Allowed_for_Access?.length);
          for(let i=0; i<data?.data?.data?.Deals_Allowed_for_Access?.length; i++){
            const dealid = data?.data?.data?.Deals_Allowed_for_Access[i]?.ID;
            const res = await axios.post("https://investmentportal.herokuapp.com/getalldealsbyid",{dealid});
            setDeals(preData=>[...preData,res?.data?.data]);
            setIssuerName(preData=>[...preData,res?.data?.data?.Issuer_Name]);
            setFinancerName(preData=>[...preData,res?.data?.data?.Financer]);
            console.log(res);
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
            dealsid,
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