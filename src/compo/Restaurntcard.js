const Restaurntcard = (props) =>{
    const {resData}=props
    const {id,name,avgRating,costForTwo} = resData;
    return (
    <div className='card-container'> 
    <img 
    className="picture"
    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId}/>
    <h1>{id}</h1>
    <h2>{name}</h2>
    <h3>{avgRating}</h3>
    <h4>{costForTwo}</h4>

    </div>)
}
export default Restaurntcard; 