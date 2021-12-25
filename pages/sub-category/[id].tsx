import Link from "next/link";
import Layout from "../../components/Layout";

const SubCategory = () => {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10 flex">
                <div className="w-3/5">
                    <div className="flex flex-wrap justify-center space-y-4">
                        {`consectetur adipisicing veritatis veniam eveniet dignissimos voluptates aspernatur animirepellat possimus`
                            .split(" ")
                            .map((v) => (
                                <div
                                    key={v}
                                    className="bg-white p-4 rounded-md h-40 overflow-hidden"
                                >
                                    <Link href="/article/id">
                                        <a>
                                            <h2 className="text-2xl font-semibold">
                                                Lorem ipsum dolor
                                            </h2>
                                            <p className="text-gray-600 line-clamp-3">
                                                Lorem ipsum dolor, sit amet
                                                consectetur adipisicing elit.
                                                Ducimus dolorem eaque quisquam
                                                ab! Libero impedit ad, ullam
                                                accusantium eaque, veniam nobis
                                                cum autem a, ea ut quae
                                                similique quod dolor animi nisi
                                                eum dolore eius voluptas rerum
                                                rem! Consequuntur amet possimus,
                                                aspernatur odit reprehenderit
                                                accusamus error dolorum at
                                                provident dolorem laboriosam
                                                porro unde obcaecati ipsa
                                                exercitationem assumenda libero!
                                                Sunt perspiciatis ipsum,
                                                praesentium culpa nisi sapiente
                                                voluptate, omnis similique
                                                assumenda reprehenderit
                                                laboriosam quasi itaque dolores,
                                                asperiores tempore aliquid!
                                                Dolorum ab dignissimos cumque
                                                placeat non? Iure quo molestiae
                                                adipisci accusantium? Nisi sed
                                                aliquid maxime totam incidunt
                                                eos ut quam numquam adipisci
                                                tenetur!
                                            </p>
                                        </a>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="w-2/5 h-[90vh] p-4">
                    <div className="bg-gray-200 h-full w-full rounded-md" />
                </div>
            </div>
        </Layout>
    );
};

export default SubCategory;
