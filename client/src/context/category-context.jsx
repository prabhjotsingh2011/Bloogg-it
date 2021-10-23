import react,{ createContext,useState }from 'react'

export const  categoryValue=createContext(null);

const CategoryProvider = ({children})=>{

    const [value, setValue] = useState()


    return (
        <categoryValue.Provider 
            value={{
                value,
                setValue
            }}
        >
            {children}
        </categoryValue.Provider>
    )

}

export default CategoryProvider;
