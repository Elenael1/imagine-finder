import { useEffect, useState } from "react";
import ImageGallery from "./components/images/imageGallery/ImageGallery";
import { ProgressBar } from "react-loader-spinner";
import SearchBar from "./components/searchbar/SearchBar";
import Modal from "./components/modal/Modal";
import Pagination from "./components/pagination/Pagination";
import { request } from "./API/Request";
import searchIcon from './icons/icon-search.png'
import './/App.css'

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataInput, setDataInput] = useState("");
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  const updateImages = async () => {
    try {
      setIsLoading(true);
      const data = await request(dataInput, page);
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };
      

      useEffect(() => {
        updateImages()
      }, []) 

      useEffect(() => {
        if (dataInput === "") return
        updateImages()
      }, [dataInput, page]);

      const plusPage = () => {
        setPage((prevState) => prevState + 1);

      };

      

      const changeModal = () => {
        setOpenModal(!openModal);
}; 
    
    
      const getLargeImage = (url) => {
        setLargeImage(url)
        changeModal()
      }

      const plusInputValue = (dataInput) => {
        setImages([])
        setPage(1)
        setDataInput(dataInput)
       
    
      };

  return (
    <div className="App">
       {openModal && <Modal openModal={openModal} changeModal={changeModal} largeImage={largeImage}/>}
       
       <SearchBar plusInputValue={plusInputValue} searchIcon={searchIcon}/>
       {isLoading === true ?  <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/> :  <ImageGallery data={images} getLargeImage={getLargeImage}/> }
      <Pagination plusPage={plusPage}/>

     
      
     </div>
  )
}

export default App
