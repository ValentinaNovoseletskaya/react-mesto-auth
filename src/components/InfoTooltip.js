function InfoTooltip() {

    return (
        <div className='popup popup_type_status'>
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <img src= '../../images/success.svg' alt='' className="popup__status-image" />
                <h2 className="popup__status">Вы успешно зарегистрировались!</h2>
            </div>
        </div>        
    );
}
        
export default InfoTooltip;