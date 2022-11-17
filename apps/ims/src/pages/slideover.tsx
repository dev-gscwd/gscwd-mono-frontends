import { useState } from 'react';
import { Button, Drawer, NotificationController, useNotification } from '@frontends/ui';
import { useRouter } from 'next/router';

export default function MyDialog() {
  let [openDrawer, setOpenDrawer] = useState(false);

  const { notifRef, notify } = useNotification();

  const router = useRouter();

  return (
    <>
      <Drawer open={openDrawer} setOpen={setOpenDrawer}>
        <Drawer.Header className="bg-slate-100 h-40 p-5">Header</Drawer.Header>
        <Drawer.Body className="p-5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi labore explicabo adipisci aut! Error debitis
            beatae numquam facere, ducimus itaque sed deserunt doloremque tempora animi maxime quos magni amet excepturi
            assumenda perspiciatis sapiente tenetur deleniti. Sint, dicta magni. Sit placeat corrupti excepturi
            reiciendis hic molestias, doloribus saepe sapiente dolore quam, libero cumque voluptatibus debitis impedit
            possimus. Eligendi perspiciatis magnam id architecto sequi, exercitationem nobis distinctio voluptate facere
            cumque ea cum quo optio minus quas suscipit provident, numquam, fuga ab possimus quam! Nemo at impedit ipsum
            nam eum sit quis facilis officia optio, id laudantium exercitationem unde quisquam autem, corrupti veniam,
            repellendus voluptatibus tempore necessitatibus qui voluptatum. Ipsum eaque minima deserunt tempora
            cupiditate facere sed commodi voluptate debitis error doloremque voluptatem temporibus eligendi corrupti
            dignissimos, aliquid expedita? Assumenda, placeat impedit porro velit ullam voluptate. Quisquam mollitia
            consectetur itaque, quis adipisci unde veniam iure necessitatibus? Necessitatibus ea totam asperiores dolore
            debitis, maiores atque nihil! Vitae harum fugit quis cumque ipsa repellat dolor dicta maiores? Mollitia
            laborum vel optio dolore harum totam beatae, consectetur, doloribus eaque nemo aut accusamus aspernatur
            atque quas voluptate impedit illum fugiat quaerat explicabo quam incidunt voluptatum commodi dolor. Fuga
            fugit unde at praesentium nam corporis. Itaque veniam voluptatibus ratione? Rem iure eos laudantium a nobis
            enim, hic reprehenderit tempore explicabo facilis vel molestias. Ipsum voluptatem incidunt sint corporis
            doloremque, quaerat, alias quod error amet deleniti reprehenderit modi iste, illo ea dolores eos voluptates
            assumenda sapiente. Deleniti unde deserunt eaque quae. Corrupti aliquam minus similique recusandae
            voluptates natus, nam molestias mollitia commodi officiis cum incidunt earum necessitatibus. Consequuntur
            deserunt minus ad, perspiciatis earum, non corporis expedita, totam aliquam architecto rerum iste! Aliquam,
            nihil est sunt sequi perspiciatis labore accusamus aperiam cumque consectetur ipsam incidunt quasi
            reiciendis similique id ipsum molestias vel expedita a voluptas, temporibus quaerat corporis tenetur neque
            itaque? Delectus sit dolores voluptates, nulla qui quos tenetur. Voluptate a quos minima, ipsum inventore
            molestias dolor numquam cum! Deserunt corrupti veritatis ab ipsa, asperiores nobis distinctio
            exercitationem, ratione voluptatum molestiae est. Aliquam excepturi vel ipsa labore corrupti ducimus
            repellendus, tempora maxime quae hic porro praesentium dolorem deleniti aut reiciendis amet officia esse
            dolorum natus facilis beatae. Voluptatem cupiditate debitis expedita minima delectus sunt est magni quasi,
            recusandae ipsum reiciendis eius maiores eveniet doloremque, fuga nobis deleniti saepe? Sit debitis, animi
            modi hic exercitationem odit iusto aspernatur obcaecati fugit dolorem corporis deleniti assumenda ab dicta
            itaque quod quam vero. Maiores repellat esse ducimus sunt neque praesentium nesciunt consequatur, officia
            vitae adipisci tempora saepe repellendus deleniti quis inventore excepturi ullam commodi explicabo ipsam.
            Deserunt magnam neque fugit maxime ullam similique. Accusantium beatae odit temporibus laboriosam, excepturi
            similique qui laudantium itaque labore voluptas soluta dolor quia minima at, neque quo cum accusamus. Totam
            repudiandae cumque minus corrupti, fugit eos ad id inventore deleniti illo natus odio accusamus rem delectus
            molestias quis error ipsam eius nesciunt. Commodi id doloribus voluptatum odit quia porro obcaecati quae
            aliquid rem dolorum, dolore sequi neque autem architecto consectetur aspernatur numquam dolores officiis.
            Distinctio accusantium sequi iusto dolorem.
          </p>
        </Drawer.Body>
      </Drawer>

      <NotificationController ref={notifRef} position="bottom-right" />

      <div className="h-full flex items-center justify-center gap-3">
        <Button onClick={() => setOpenDrawer(true)}>Open Drawer</Button>
      </div>
    </>
  );
}
