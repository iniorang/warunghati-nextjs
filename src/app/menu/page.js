import FoodCard from './foodcard'

export default function menu() {
    return (
        <div className='container p-5'>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center'>
                <FoodCard makanan={
                    {
                        nama: 'Asinan Betawi',
                        gambar: `Makanan/Asinan Betawi.png`,
                        deskripsi: `A harmonious blend of sweet, sour, and nutty flavors. Crisp vegetables and fruits
                  mingle with a zesty tamarind dressing, topped with crushed peanuts for a delightful crunch.`
                    }
                } />
                <FoodCard makanan={
                    {
                        nama: 'Gado-Gado',
                        gambar: `Makanan/Gado-Gado 3.png`,
                        deskripsi: `A delightful texture dance. Crisp vegetables, tofu, and tempeh embrace a creamy
                  peanut sauce infused with tamarind and chili's vibrant notes.`
                    }
                } />
                <FoodCard makanan={
                    {
                        nama: 'Kupat Tahu Magelang',
                        gambar: `Makanan/Kupat Tahu Magelang 1.png`,
                        deskripsi: `Embrace the medley of textures. Steamed rice cake and silky tofu meet a rich peanut
                  sauce, enriched with a sprinkle of sprouts and herbs.`
                    }
                } />
                <FoodCard makanan={
                    {
                        nama: 'Laksa Medan',
                        gambar: `Makanan/Laksa Medan.png`,
                        deskripsi: `A feast for your senses. Creamy coconut broth, noodles, and a harmonious blend of
                  toppings. Laksa Medan takes you on a flavor-packed journey.`
                    }
                } />
                <FoodCard makanan={
                    {
                        nama: 'Mie Kocok Bandung',
                        gambar: `Makanan/Mie Kocok Bandung.png`,
                        deskripsi: `Savor the symphony of tender beef, chewy noodles, and aromatic herbs in a savory
                  broth. A taste that lingers long after each spoonful.`
                    }
                } />
            </div>

        </div>
    )
}