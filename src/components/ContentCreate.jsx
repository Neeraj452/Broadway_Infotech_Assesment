import Content from "./Content";
import Header from "./Header";
import Table from "./Table";

const ContentCreate = () => {
    return (
        <div >
        <Header />
        <div className="w-100 box-parent ">
          <Content />
          <Table />
        </div>
        </div>
    );
    }

export default ContentCreate;