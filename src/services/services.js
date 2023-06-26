const GetData = {
    getData: async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("There was an error");
        }

        return res.json();
    }
}

export default GetData;