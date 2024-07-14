import Heading from "../../../../components/Heading/Heading";
import SubHeading from "../../../../components/SubHeading/SubHeading";


const PlantImageGallery = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mb-24">
            <div className="mb-12">
                <Heading>Explore Our Plant Gallery</Heading>
                <SubHeading>A Visual Journey Through Our Vibrant Plant Collection</SubHeading>
            </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/dMZf3G9/gallery1.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/3SsjQDs/gallery2.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/f9PPvvk/gallery3.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/qNw7TxD/gallery4.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/GTmCBDQ/gallery5.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/7jqqWcj/gallery6.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/nnJGG0p/gallery7.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/vBw4981/gallery8.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/ssJzVXH/gallery9.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/XCztFsp/gallery10.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/1sLDdF5/gallery11.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/5cgGH8n/gallery12.jpg" alt="" />
        </div>
    </div>
</div>

        </div>
    );
};

export default PlantImageGallery;