import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ eventName: "Hari Peringatan Laut dan Samudera nasional - 15 Januari", editable: false }
				, { eventName: "Hari Lahan Basah Sedunia - 2 Februari", editable: false }
				, { eventName: "Hari Peduli Sampah Nasional - 21 Februari[1]", editable: false }
				, { eventName: "Hari Hutan Sedunia - 21 Maret", editable: false }
				, { eventName: "Hari Air Sedunia - 22 Maret", editable: false }
				, { eventName: "Hari Meteorologi Sedunia - 23 Maret", editable: false }
				, { eventName: "Hari Bumi - 22 April", editable: false }
				, { eventName: "Hari Penanaman Pohon - Jumat terakhir di bulan April", editable: false }
				, { eventName: "Hari Burung Migratori Internasional - 3 Mei", editable: false }
				, { eventName: "Hari Surya - 3 Mei", editable: false }
				, { eventName: "Hari Biodiversitas Dunia - 22 Mei", editable: false }
				, { eventName: "Hari Bersepeda Ke Kantor (Bike-to-Work Day) - Jumat Ketiga di bulan Mei", editable: false }
				, { eventName: "Hari Anti Tembakau Internasional - 31 Mei", editable: false }
				, { eventName: "Hari Lingkungan Hidup Sedunia PBB - 5 Juni", editable: false }
				, { eventName: "Hari Melawan Desertifikasi dan Kekeringan Dunia PBB - 17 Juni", editable: false }
				, { eventName: "Hari Populasi Dunia PBB - 11 Juli", editable: false }
				, { eventName: "Hari Perlindungan Lapisan Ozon Sedunia - 16 September", editable: false }
				, { eventName: "Hari Emisi Nol (Zero Emissions Day) - 20 September", editable: false }
				, { eventName: "Hari Bebas Mobil (Car Free Day) - 22 September", editable: false }
				, { eventName: "eDay - 4 Oktober di 2008", editable: false }
				, { eventName: "Hari Habitat Dunia PBB - Senin pertama di bulan Oktober", editable: false }
				, { eventName: "Hari Pengurangan Bencana Alam Internasional - 13 Oktober", editable: false }
				, { eventName: "Hari Peringatan Sedunia untuk Mencegah Eksploitasi Lingkungan dalam Perang dan Konflik Bersenjata - 6 November", editable: false }
				, { eventName: "Hari Pohon - 21 November", editable: false }
				, { eventName: "Hari Gunung Sedunia - 11 Desember", editable: false }
				, { eventName: "Hari Aksi Ozon - Pada waktu tertentu di musim panas", editable: false }
			]
		}
	}

	render = () => {
		return (
			<table className="table">
				<thead>
					<th>Nama-Tanggal</th>
				</thead>
				<tbody>
					{this.state.data.map((data, index) => (
						<SubTable
							index={index}
							eventName={data.eventName}
							key={index}
						/>
					))}
				</tbody>
			</table>
		)
	}
}

class SubTable extends App {
	render = () => {
		const makeEditable = () => {
			let data = this.state.data;
			data[this.props.index].editable = !data[this.props.index].editable;
			this.setState({data:data});
		}
		return (
			<tr key={this.props.index}>
				<td contentEditable={this.state.data[this.props.index].editable} >{this.props.eventName}</td>
				<td><button className="btn btn-primary" onClick={makeEditable} >Edit</button></td>
			</tr>
		)
	}
}



ReactDOM.render(<App />, document.getElementById("root"))


