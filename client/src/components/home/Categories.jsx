import React,{ useContext } from 'react'
import { Button, makeStyles, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { categories } from '../../constant/data.js'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { categoryValue } from '../../context/category-context'

const useStyles = makeStyles({
    create: {
        margin: 20,
        background: '#6495ED',
        color: '#FFF',
        width: '86%'
    },
    table: {
        border: ' 1px Solid rgba(224, 224,224,1)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }

})




const Categories = () => {
    const classes = useStyles();
    const history = useHistory();

    const {value,setValue} = useContext(categoryValue);


    const handleClick =(category)=>{
        setValue(category);
        
    }

    return (
        <>
            <Link to='/create' className={classes.link} > <Button variant='contained' className={classes.create}>create blog</Button></Link>
            <Table className={classes.table} >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to={'/'} className={classes.link} >
                                All categories
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ width: '100%' }}>
                    {
                        categories.map(category => (
                            <TableRow onClick={()=> handleClick(category)} >
                                <TableCell  >
                                    <Link to={`/?category=${category}`} className={classes.link} >
                                        {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories
