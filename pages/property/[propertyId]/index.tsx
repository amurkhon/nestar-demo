import { useRouter } from "next/router";

const PropertyDetail = () => {
    const router = useRouter();
    const { propertyId } = router.query;
    return <div> PROPERTY DETAIL { propertyId }</div>
};

export default PropertyDetail;