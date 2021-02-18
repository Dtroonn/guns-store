import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Crm = () => {
	const { register, handleSubmit } = useForm();

	const onFileSubmit = async (data) => {
		const base64EncodedImage = await getBase64EncodedImage(data.image[0]);
		const response = await axios.post("http://localhost:5555/guns", {
			name: data.name,
			price: { current: data.price },
			base64EncodedImage,
			count: data.count,
			categories: [data.category],
		});
		console.log(response);
	};

	const getBase64EncodedImage = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				resolve(reader.result);
			};
			reader.onerror = () => {
				reject(reader.error);
			};
		});
	};

	const fetchGuns = async () => {
		const response = await axios.get(
			"http://localhost:5555/guns?categories=lalki,trololo&page=102"
		);
		console.log(response.data.items);
	};

	// React.useEffect(() => {
	//   (async function () {
	//     try {
	//       const response = await axios.post("http://localhost:5555/categories", {
	//         name: "trololo",
	//       });
	//       console.log(response);
	//     } catch (e) {
	//       console.log(e.response);
	//     }
	//   })();
	// }, []);
	return (
		<div>
			<form
				onSubmit={handleSubmit(onFileSubmit)}
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<input
					name="name"
					ref={register}
					placeholder="Введите название оружия"
					type="text"
					style={{ display: "block", marginBottom: "20px" }}
				/>
				<input
					name="price"
					ref={register}
					placeholder="Введите цену"
					type="text"
					style={{ display: "block", marginBottom: "20px" }}
				/>
				<input
					name="category"
					ref={register}
					placeholder="Введите id категории"
					type="text"
					style={{ display: "block", marginBottom: "20px" }}
				/>
				<input
					name="count"
					ref={register}
					placeholder="Введите количество товара"
					type="text"
					style={{ display: "block", marginBottom: "20px" }}
				/>
				<input
					name="image"
					ref={register}
					type="file"
					style={{ display: "block", marginBottom: "20px" }}
				/>
				<button type="submit">Отправить</button>
			</form>
			<button onClick={fetchGuns}>запросить</button>
		</div>
	);
};

export default Crm;
