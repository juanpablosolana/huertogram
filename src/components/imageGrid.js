import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
import Spinner from './spiner';

const ImageGrid = ({setSelectedImg})=>{
  const {docs, loading} = useFirestore('flowers');

  // console.log(docs);
  return(
    <div className="top">
    <div className="img-grid">
      {loading ? <Spinner/>:null}
      {docs && docs.map(doc=>(
        <motion.div className="img-wrap" key={doc.id}
        layout
        whileHover={{opacity:1}}
        onClick={()=>setSelectedImg(doc.url)}
        >
          <motion.img loading="lazy" src={doc.url} alt="flowers"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.5}}
          />
           </motion.div>
      ))}
    </div>
    </div>
  )
}

// const LazyTrending = ()=>{
//   const [show, setShow] = useState(false)

//     useEffect(()=>{
//       const onChange = (entries)=>{
//           const el = entries[0]
//           console.log(el)
//       }
//       const observer = new IntersectionObserver(
//         onChange,{
//           rootMargin:'100px'
//         }
//       )
//       observer.observe(document.getElementById('lazy'))
//     })
//     return <div id="lazy">
//       {show ? 'Hola' : null}
//     </div>
// }


export default ImageGrid;