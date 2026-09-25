import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Item } from '../../services/data';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.page.html',
  styleUrls: ['./pages-detail.page.scss'],
  standalone: false,
})

export class PagesDetailPage implements OnInit {

  item: Item = {
    name: '',
    description: ''
  };

  itemId: string | null = null;
  isNewItem = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController) { }


  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');

    if (this.itemId) {
      this.isNewItem = false;
      this.loadItem();
    }
  }

  async loadItem() {
    const loading = await this.loadingController.create({
      message: 'Carregar item...'
    });

    await loading.present();

    this.dataService.getItem(this.itemId!).subscribe(res => {

      loading.dismiss();
      if (res) {

        this.item = res;

      } else {

        this.presentToast('Item não encontrado!', 'danger');
        this.router.navigateByUrl('/tabs/home');

      }

    }, err => {
      loading.dismiss();
      this.presentToast('Erro ao carregar item', 'danger');
      this.router.navigateByUrl('/tabs/home');
    });

  }

  async saveItem() {

    const loading = await this.loadingController.create({
      message: 'Salvando item...'
    });

    await loading.present();

    if (this.isNewItem) {
      this.dataService.addItem(this.item).then(() => {

        loading.dismiss();
        this.presentToast('Item adicionado com sucesso', 'success');
        this.router.navigateByUrl('/tabs/home');

      }, err => {

        loading.dismiss();
        this.presentToast('Erro ao adicionar item: ' + err, 'danger');
      });

    } else {

      this.dataService.updateItem(this.item).then(() => {

        loading.dismiss();
        this.presentToast('Item atualizado com sucesso', 'success');
        this.router.navigateByUrl('/tabs/home');

      }, err => {

        loading.dismiss();
        this.presentToast('Erro ao atualizar item: ' + err, 'danger');
      });
    }
  }

  async presentToast(message: string, color: string = 'primary') {

    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });

    toast.present();
  }

}
