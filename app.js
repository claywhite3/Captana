/* ============================================================
   Captana Demo — shared helpers
   - i18n (FR default, EN toggle)
   - sessionStorage-backed app state
   - small DOM utilities used across pages
   ============================================================ */

const I18N = {
  fr: {
    /* Login */
    login_welcome:        "Bienvenue",
    login_sub:            "Connectez-vous pour continuer vers Captana",
    login_email:          "E-mail",
    login_password:       "Mot de passe",
    login_email_ph:       "vous@exemple.com",
    login_btn:            "Se connecter",
    login_err_email:      "Veuillez saisir une adresse e-mail valide.",
    login_err_pass:       "Le mot de passe doit contenir au moins 6 caractères.",
    login_lang_label:     "Langue",

    /* Location picker */
    loc_title:            "Sélectionner un magasin",
    loc_sub:              "Choisissez le site où vous travaillez aujourd'hui",
    loc_type_hyper:       "Hypermarché",
    loc_type_super:       "Supermarché",
    loc_type_city:        "Convenience Urbain",
    loc_type_express:     "Petite Convenience",

    /* Flow picker */
    flow_title:           "Captana",
    flow_sub:             "Sélectionnez un flux pour commencer",
    flow_section_hw:      "Gestion des équipements",
    flow_section_ops:     "Opérations en magasin",
    flow_mapping:         "Cartographie",
    flow_mapping_desc:    "Créer la structure du magasin",
    flow_mapping_done:    "Cartographie terminée — toucher pour modifier",
    flow_install:         "Installation",
    flow_install_desc:    "Installer le matériel des caméras",
    flow_install_locked:  "Veuillez d'abord terminer la cartographie",
    flow_validation:      "Validation",
    flow_validation_desc: "Vérifier les installations terminées",
    flow_validation_locked:"Terminez d'abord la cartographie",
    flow_validation_done: "Site validé et signé",
    flow_maintenance:     "Maintenance",
    flow_maintenance_desc:"Diagnostiquer et résoudre les problèmes",
    flow_director:        "Directeur de magasin",
    flow_director_desc:   "Tableau de bord de la disponibilité",
    flow_section_mgr:     "Chef de rayon",
    flow_section_mgr_desc:"Attribuer et suivre les tâches",
    flow_associate:       "Employé de magasin",
    flow_associate_desc:  "Tâches de remplissage assignées",
    flow_change_store:    "changer",

    /* Tag chooser */
    tag_title:            "Quels prix-étiquettes utilisez-vous ?",
    tag_sub:              "Sélectionnez le type d'étiquettes présent dans ce magasin",
    tag_paper:            "Étiquettes papier",
    tag_paper_desc:       "Imprimées, attachées au rayon",
    tag_digital:          "Étiquettes ESL numériques",
    tag_digital_desc:     "Affichage électronique des prix",

    /* Vusion verify */
    verify_title:         "Vérifions le fabricant",
    verify_sub:           "Retournez une étiquette numérique. Cherchez l'un de ces marquages au dos.",
    verify_marker_label:  "Recherchez :",
    verify_marker_a:      "SES-Imagotag",
    verify_marker_b:      "Logo Vusion",
    verify_q:             "Voyez-vous l'un de ces marquages ?",
    verify_yes:           "Oui, c'est Vusion",
    verify_no:            "Non, ce n'est pas Vusion",

    /* Vusion confirmed */
    confirmed_title:      "Parfait, vous êtes prêt",
    confirmed_msg:        "Merci d'utiliser des étiquettes Vusion ESL. Aucune cartographie supplémentaire n'est nécessaire — vous pouvez commencer l'installation.",
    confirmed_btn:        "Retour au menu",

    /* Placeholder stubs (Phase 2) */
    stub_manual_title:    "Cartographie manuelle",
    stub_manual_msg:      "Phase 2 — à construire ensuite.",

    /* Manual mapping — intros */
    mm_intro1_eyebrow:    "Cartographie manuelle",
    mm_intro1_title:      "Créons votre magasin numérique",
    mm_intro1_body:       "Nous allons enregistrer chaque emplacement physique où une caméra Captana sera installée. Les installateurs sélectionneront ensuite ces emplacements jusqu'à ce que tout soit installé.",
    mm_intro2_title:      "Que fait une caméra Captana ?",
    mm_intro2_body:       "Chaque caméra observe le rayon en face d'elle et détecte les ruptures sur les linéaires.",
    mm_intro3_title:      "Pas de partenaire, pas de caméra",
    mm_intro3_body:       "Si un rayon n'a pas de \"partenaire\" en face, il n'est pas éligible à l'installation.",
    mm_intro_step:        "Étape",
    mm_intro_of:          "sur",
    mm_intro_begin:       "Commencer",

    /* Manual mapping — zone */
    mm_zone_eyebrow:      "Cartographie",
    mm_zone_title_empty:  "Ajoutons votre première zone",
    mm_zone_title_more:   "Ajouter une autre zone ?",
    mm_zone_sub_empty:    "Saisissez le nom ou le code de la zone (ex. A, Épicerie, Frais)",
    mm_zone_sub_more:     "Continuez à ajouter, ou indiquez qu'il n'y en a plus",
    mm_zone_input_label:  "Nom de la zone",
    mm_zone_input_ph:     "ex. A",
    mm_zone_add_btn:      "Ajouter la zone",
    mm_zone_done_btn:     "Plus de zones",
    mm_zone_completed:    "Zones ajoutées",
    mm_zone_aisles:       "allées",
    mm_zone_aisle:        "allée",

    /* Manual mapping — aisle */
    mm_aisle_eyebrow:     "Zone",
    mm_aisle_page_eyebrow:"Ajout des allées",
    mm_aisle_card_label:  "Allée",
    mm_aisle_title_first: "Numéro de la première allée",
    mm_aisle_title_next:  "Ajouter l'allée suivante ?",
    mm_aisle_sub_first:   "Quelle est l'allée avec le plus petit numéro dans cette zone ?",
    mm_aisle_sub_next:    "Nous suggérons la suivante. Modifiez si besoin.",
    mm_aisle_input_label: "Numéro d'allée",
    mm_aisle_add_btn:     "Configurer cette allée",
    mm_aisle_done_btn:    "Plus d'allées dans cette zone",
    mm_aisle_completed:   "Allées dans cette zone",
    mm_sections_completed:"Rayons dans cette allée",
    mm_aisle_sections:    "rayons",
    mm_aisle_section:     "rayon",

    /* Manual mapping — aisle review grid */
    mm_aisle_review_title:"Vérifions les allées",
    mm_aisle_review_sub:  "Vert = configuré. Gris = nous pensons que c'est sauté. Vous pouvez revenir si besoin.",
    mm_aisle_review_ok:   "C'est correct, terminer la zone",
    mm_aisle_review_back: "Retour pour modifier",
    mm_aisle_skipped:     "sauté",

    /* Manual mapping — section setup */
    mm_sec_eyebrow:       "Allée",
    mm_sec_page_eyebrow:  "Ajout des rayons",
    mm_sec_first_title:   "Numéro du premier rayon",
    mm_sec_first_sub:     "Quel est le rayon avec le plus petit numéro dans cette allée ?",
    mm_sec_first_input:   "Numéro de rayon",
    mm_sec_first_btn:     "Configurer ce rayon",

    /* Manual mapping — looking-at */
    mm_look_eyebrow:      "Configurer le rayon",
    mm_look_title:        "Que regarde cette caméra ?",
    mm_look_sub:          "Lorsqu'elle sera installée ici, quelle allée et quel rayon observera-t-elle en face ?",
    mm_look_aisle:        "Allée",
    mm_look_section:      "Rayon",
    mm_look_aisle_ph:     "ex. 4",
    mm_look_section_ph:   "ex. 12",
    mm_look_inferred:     "Suggéré",
    mm_look_save_btn:     "Enregistrer le rayon",

    /* Manual mapping — section landing (subsequent) */
    mm_sec_next_title:    "Rayon suivant",
    mm_sec_next_sub:      "Le prochain numéro dans la séquence",
    mm_sec_setup_btn:     "Configurer ce rayon",
    mm_sec_skip_btn:      "Sauter ce rayon",
    mm_sec_done_btn:      "Plus de rayons — passer à l'allée suivante",

    /* Manual mapping — section review */
    mm_sec_review_title:  "Vérifions les rayons",
    mm_sec_review_sub:    "Vert = configuré. Gris = sauté.",
    mm_sec_review_ok:     "C'est correct, terminer l'allée",
    mm_sec_review_back:   "Retour pour modifier",

    /* Manual mapping — final review */
    mm_review_eyebrow:    "Cartographie",
    mm_review_title:      "Vérifions votre cartographie",
    mm_review_sub:        "Touchez n'importe quelle zone pour modifier",
    mm_review_summary:    "Résumé",
    mm_review_zones:      "zones",
    mm_review_zone:       "zone",
    mm_review_aisles_total:"allées",
    mm_review_sections_total:"rayons",
    mm_review_confirm:    "Confirmer et terminer",
    mm_review_edit:       "Revenir modifier",

    /* Toasts during mapping */
    mm_toast_aisle_done:  "Allée terminée",
    mm_toast_aisle_done_msg:"Passons à la suivante.",
    mm_toast_zone_done:   "Zone terminée",
    mm_toast_zone_done_msg:"Belle progression !",
    mm_toast_no_zones:    "Ajoutez au moins une zone d'abord",
    mm_toast_no_aisles:   "Ajoutez au moins une allée d'abord",

    /* Section edit sheet */
    sec_sheet_title:      "Détails du rayon",
    sec_sheet_looking:    "Cible",
    sec_sheet_skipped:    "Sauté — non installé",
    sec_sheet_edit:       "Modifier",
    sec_sheet_delete:     "Supprimer",
    sec_sheet_confirm_del:"Supprimer ce rayon ?",

    /* ====== INSTALL FLOW ====== */

    /* Vusion intro */
    inv_intro_eyebrow:    "Installation",
    inv_intro_title:      "Voici comment ça va se passer",
    inv_intro_step1_t:    "Scanner l'étiquette d'installation",
    inv_intro_step1_b:    "Sur le rayon où vous allez monter la caméra",
    inv_intro_step2_t:    "Installer la caméra",
    inv_intro_step2_b:    "Insérez la batterie, fixez la caméra, puis activez-la par NFC",
    inv_intro_step3_t:    "Scanner l'étiquette cible",
    inv_intro_step3_b:    "Sur le rayon en face que la caméra observera",
    inv_intro_step4_t:    "Vérifier la vue",
    inv_intro_step4_b:    "Capturer une image et confirmer le cadrage",
    inv_intro_begin:      "Commencer",

    /* Scan install location */
    inv_scan_install_eyebrow: "Installer une caméra",
    inv_scan_install_title:   "Scannez l'étiquette d'installation",
    inv_scan_install_sub:     "Pointez votre caméra vers le code-barres de l'étiquette du rayon où vous allez monter la caméra.",
    inv_scan_status_label:    "Étiquette d'installation",
    inv_scan_status_pending:  "En attente du scan…",
    inv_scan_status_scanned:  "Scanné",
    inv_scan_status_pending_badge: "En attente",
    inv_scan_complete_label:  "Scan réussi",
    inv_scan_tap_continue:    "Touchez pour continuer",
    inv_scan_rescan:          "Rescanner",
    inv_scan_manual:          "Saisie manuelle",
    inv_scan_hint_caption:    "Scannez le code-barres au bord inférieur de l'étiquette",
    inv_scan_done:            "J'ai terminé l'installation",
    inv_manual_title:         "Saisie manuelle",
    inv_manual_sub:           "Si le scan ne fonctionne pas, saisissez l'identifiant imprimé sur l'étiquette.",
    inv_manual_label:         "Identifiant de l'étiquette",
    inv_manual_ph:            "ex. 4Z1-9S8TW",
    inv_manual_hint:          "Vous le trouverez sous le code-barres",
    inv_manual_submit:        "Confirmer",

    /* Battery page */
    inv_batt_eyebrow:         "Étape 2 sur 4",
    inv_batt_title:           "Insérez la batterie",
    inv_batt_sub:              "Glissez la batterie dans la caméra. Veillez à respecter le sens indiqué.",
    inv_batt_status_label:    "Emplacement d'installation",
    inv_batt_confirm:         "Batterie insérée",
    inv_batt_guide_link:      "Voir le guide d'installation",
    inv_batt_toast_title:     "Maintenant, installez la caméra",
    inv_batt_toast_msg:       "Fixez la caméra à son emplacement final avant de continuer.",
    inv_batt_toast_action:    "Voir le guide",

    /* NFC tap */
    inv_nfc_eyebrow:          "Étape 2 sur 4",
    inv_nfc_title:            "Approchez votre téléphone",
    inv_nfc_sub:              "Levez le haut de votre téléphone vers la caméra installée.",
    inv_nfc_active_title:     "Activation",
    inv_nfc_active_sub:       "Connexion à la caméra en cours…",
    inv_nfc_done_title:       "Caméra activée",
    inv_nfc_done_sub:         "Vous pouvez retirer votre téléphone et continuer.",
    inv_nfc_steady:           "Tenez bien immobile",
    inv_nfc_wifi_sending:     "Envoi des identifiants Wi-Fi…",
    inv_nfc_wifi_sent:        "Identifiants Wi-Fi envoyés",
    inv_nfc_camid_label:      "Caméra",

    /* Guide stub */
    inv_guide_eyebrow:        "Installation",
    inv_guide_title:          "Guide d'installation",
    inv_guide_soon_title:     "Bientôt disponible",
    inv_guide_soon_msg:       "Les instructions pas-à-pas pour cette étape arriveront dans une prochaine version.",

    /* Role stub — shared placeholder for Validation / Director / Section Mgr / Associate */
    role_stub_eyebrow:        "Aperçu",
    role_stub_soon_title:     "Bientôt disponible",
    role_stub_tag:            "Prochaine version",
    role_stub_msg_validation: "Audit en lecture seule des installations terminées. Disponible dans une prochaine version.",
    role_stub_msg_director:   "Tableau de bord de la disponibilité en rayon à l'échelle du magasin. Disponible dans une prochaine version.",
    role_stub_msg_section_mgr:"Attribution et suivi des tâches de réassort aux équipes. Disponible dans une prochaine version.",
    role_stub_msg_associate:  "Liste des tâches de réassort assignées. Disponible dans une prochaine version.",

    /* Target tag scan — Step 3 of 4 */
    inv_tscan_eyebrow:        "Installer une caméra",
    inv_tscan_title:          "Scannez l'étiquette cible",
    inv_tscan_sub:            "Scannez l'étiquette du rayon en face — celui que la caméra observera.",
    inv_tscan_install_label:  "Caméra installée",
    inv_tscan_target_label:   "Cible — en face",
    inv_tscan_target_pending: "En attente du scan…",
    inv_tscan_target_badge:   "En attente",
    inv_tscan_target_scanned: "Scanné",
    inv_tscan_no_target:      "Pas de rayon en face",
    inv_tscan_manual:         "Saisie manuelle",
    inv_tscan_complete_label: "Scan réussi",
    inv_tscan_tap_continue:   "Touchez pour continuer",
    inv_tscan_hint_caption:   "L'étiquette se trouve sur le rayon en face de la caméra",
    inv_tscan_illu_camera:    "Caméra",
    inv_tscan_illu_camera_2:  "(vous êtes ici)",
    inv_tscan_illu_scan:      "Scannez",
    inv_tscan_illu_scan_2:    "cette étiquette",
    inv_tscan_toast_title:    "Tournez-vous vers le rayon en face",
    inv_tscan_toast_msg:      "Scannez l'étiquette du rayon que la caméra observera.",
    inv_tscan_no_target_toast_title: "Déplacez la caméra",
    inv_tscan_no_target_toast_msg:   "Choisissez un autre emplacement où il y a un rayon en face.",

    /* Capture — Step 4 of 4 part 1 */
    inv_cap_eyebrow:          "Installer une caméra",
    inv_cap_title:            "Vérifiez la vue",
    inv_cap_sub:              "La caméra va capturer une image. Tenez-vous à l'écart de la zone observée.",
    inv_cap_install_label:    "Caméra installée",
    inv_cap_target_label:     "Cible — en face",
    inv_cap_ready:            "Prêt à capturer",
    inv_cap_btn:              "Capturer l'image",
    inv_cap_capturing:        "Capture en cours…",

    /* Confirm coverage — Step 4 of 4 part 2 */
    inv_conf_eyebrow:         "Étape 4 sur 4",
    inv_conf_title:           "Vérifiez le cadrage",
    inv_conf_notice:          "Vérifiez que vous voyez l'intégralité du rayon en face.",
    inv_conf_caption:         "Si le rayon n'est pas entièrement visible, déplacez la caméra et reprenez une photo.",
    inv_conf_retake:          "Reprendre",
    inv_conf_confirm:         "Rayon entièrement visible",
    inv_conf_help:            "Aidez-moi à cadrer",

    /* Frame guide */
    inv_fg_eyebrow:           "Aide au cadrage",
    inv_fg_title:             "Comment repositionner la caméra",
    inv_fg_sub:               "Regardez votre photo et identifiez quel côté manque, puis déplacez physiquement la caméra.",
    inv_fg_diag_top:          "HAUT",
    inv_fg_diag_bottom:       "BAS",
    inv_fg_diag_left:         "GAUCHE",
    inv_fg_diag_right:        "DROITE",
    inv_fg_top_t:             "Le haut du rayon manque",
    inv_fg_top_b:             "Remontez la caméra d'un niveau d'étagère.",
    inv_fg_bot_t:             "Le bas du rayon manque",
    inv_fg_bot_b:             "Descendez la caméra d'un niveau d'étagère.",
    inv_fg_right_t:           "Le côté droit manque",
    inv_fg_right_b:           "Face à la caméra, glissez-la vers la gauche le long du rail.",
    inv_fg_left_t:            "Le côté gauche manque",
    inv_fg_left_b:            "Face à la caméra, glissez-la vers la droite le long du rail.",
    inv_fg_back:              "J'ai déplacé la caméra — reprendre",

    /* Section-complete modal */
    inv_sc_eyebrow:           "Section terminée",
    inv_sc_title:             "Caméra installée",
    inv_sc_install_label:     "Caméra installée",
    inv_sc_target_label:      "Cible observée",
    inv_sc_question:          "Que souhaitez-vous faire ?",
    inv_sc_done:              "J'ai terminé",
    inv_sc_next:              "Caméra suivante",

    /* Manual install — picker pages */
    im_eyebrow:               "Installer une caméra",
    im_zone_title:            "Choisissez une zone",
    im_zone_sub:              "Sélectionnez la zone du magasin où vous installez la caméra.",
    im_aisle_title:           "Choisissez une allée",
    im_aisle_sub:             "Sélectionnez l'allée de cette zone où va la caméra.",
    im_section_title:         "Choisissez un rayon",
    im_section_sub:           "Sélectionnez le rayon où vous installez la caméra.",
    im_zone:                  "Zone",
    im_aisle:                 "Allée",
    im_section:               "Rayon",
    im_of:                    "sur",
    im_installed:             "installées",
    im_complete:              "Terminé",
    im_observes:              "Observe",
    im_observing:             "Observe",
    im_camera_installed:      "Caméra installée",
    im_installed_badge:       "Installée",

    /* Reinstall side-modal */
    im_re_eyebrow:            "Déjà installée",
    im_re_title:              "Remplacer cette caméra ?",
    im_re_card_label:         "Caméra actuelle",
    im_re_body:               "Le remplacement supprime la caméra existante et lance une nouvelle installation à",
    im_re_cancel:             "Annuler",
    im_re_confirm:            "Remplacer la caméra",

    /* Milestone — section installed */
    ms_sec_eyebrow:           "Rayon terminé",
    ms_sec_title:             "Caméra installée",
    ms_sec_progress:          "rayons faits dans Allée",
    ms_sec_next:              "Rayon suivant",

    /* Milestone — aisle complete */
    ms_aisle_eyebrow:         "Allée terminée !",
    ms_aisle_title:           "Allée",
    ms_aisle_done_suffix:     "terminée",
    ms_aisle_card_top:        "Zone",
    ms_aisle_card_bot:        "rayons installés",
    ms_aisle_progress:        "allées faites dans Zone",
    ms_aisle_next:            "Allée suivante",

    /* Milestone — zone complete */
    ms_zone_eyebrow:          "Zone terminée !",
    ms_zone_title_suffix:     "— terminée",
    ms_zone_total_label:      "Total installé",
    ms_zone_total_unit:       "caméras sur",
    ms_zone_total_unit_2:     "allées",
    ms_zone_progress:         "zones faites",
    ms_zone_next:              "Zone suivante",

    /* Maintenance — entry page */
    mt_eyebrow:               "Maintenance",
    mt_title:                 "Travail à faire",
    mt_progress_label:        "Progression",
    mt_progress_all_done:     "Tout est fait !",
    mt_filter_battery:        "Batterie",
    mt_filter_network:        "Réseau",
    mt_filter_coverage:       "Image",
    mt_filter_hardware:       "Matériel",
    mt_zone:                  "Zone",
    mt_items_one:             "élément",
    mt_items_many:            "éléments",
    mt_help_me:               "Aidez-moi !",
    mt_check:                 "Vérifier",
    mt_checking:              "Vérification…",
    mt_last_seen:             "Vu pour la dernière fois",
    mt_completed:             "Terminé",
    mt_completed_count:       "fait",
    mt_check_remaining:       "Vérifier le travail restant",
    mt_remaining_title:       "élément(s) restant(s)",
    mt_remaining_body:        "Vous avez encore du travail non terminé.",
    mt_hidden_title:          "Éléments cachés par les filtres",
    mt_clear_filters:         "Effacer tous les filtres",
    mt_keep_filters:          "Garder les filtres et continuer",
    mt_all_done_title:        "Tout est terminé !",
    mt_all_done_body:         "Chaque élément assigné a été résolu. Bon travail.",

    /* Severity labels */
    mt_sev_battery_crit:      "Batterie morte",
    mt_sev_battery_warn:      "Batterie faible",
    mt_sev_network_crit:      "Hors ligne",
    mt_sev_network_warn:      "Signal faible",
    mt_sev_coverage_crit:     "Aucune image",
    mt_sev_coverage_warn:     "Image floue",
    mt_sev_hardware_crit:     "Panne matérielle",

    /* Rail-options side-modal */
    mt_rail_eyebrow:          "Options du rail",
    mt_rail_camera_label:     "Caméra installée",
    mt_rail_observing_label:  "Observe",
    mt_rail_installed_label:  "Installée le",
    mt_rail_by:               "par",
    mt_rail_body:             "Si cette caméra est endommagée ou irrécupérable, remplacez-la. Le remplacement lance une nouvelle installation sur ce rail.",
    mt_rail_replace:          "Remplacer la caméra",
    mt_rail_close:            "Fermer",

    /* Maintenance — battery remove page (page 1 of 2 in battery troubleshooting) */
    mbr_eyebrow:              "Dépannage batterie",
    mbr_title:                "Retirez la batterie déchargée",
    mbr_sub:                  "Ouvrez le compartiment et retirez la batterie usagée. Vous allez ensuite installer une batterie neuve.",
    mbr_loc_label:            "Emplacement",
    mbr_confirm:              "Batterie retirée",

    /* Maintenance — battery insert (page 2 of 2). Overrides on install_v_battery when reached from maintenance. */
    mbi_title:                "Insérez une batterie neuve",
    mbi_sub:                  "Glissez une batterie chargée dans le compartiment, dans le sens indiqué.",

    /* Maintenance — network remove (page 1 of 2 in network troubleshooting) */
    mnr_eyebrow:              "Dépannage réseau",
    mnr_title:                "Retirez la batterie",
    mnr_sub:                  "Retirez la batterie de la caméra. Attendez environ 20 secondes avant de la remettre.",
    mnr_loc_label:            "Emplacement",
    mnr_confirm:              "Batterie retirée",
    mnr_count_label:          "Attente du redémarrage",
    mnr_count_msg:            "Laissez la batterie hors de la caméra…",

    /* Maintenance — network resend (page 2 of 2, overlays install_v_nfc when in maintenance/network mode).
       Critical: this is NOT activation. The camera is already provisioned; we're re-pushing the saved
       Wi-Fi credentials so it can rejoin the network. Wording must reflect that. */
    mnr2_title:               "Remettez la batterie et approchez le téléphone",
    mnr2_sub:                 "Réinsérez la batterie, puis levez le haut du téléphone vers la caméra pour renvoyer les identifiants.",
    mnr2_active_title:        "Renvoi en cours",
    mnr2_active_sub:          "Retransmission des identifiants Wi-Fi…",
    mnr2_done_title:          "Identifiants renvoyés",
    mnr2_done_sub:            "Vous pouvez retirer le téléphone et continuer.",
    mnr2_wifi_sending:        "Renvoi des identifiants Wi-Fi…",
    mnr2_wifi_sent:           "Identifiants retransmis",

    /* Maintenance completion side-modal — one shared modal at the end of every troubleshooting flow */
    mc_location_label:        "Emplacement",
    mc_camera_label:          "Caméra",
    mc_continue_btn:          "Continuer pour revérifier",
    mc_continue_btn_validation:"Retour à la validation",
    mc_eyebrow_battery:       "Dépannage terminé",
    mc_title_battery:         "Batterie remplacée",
    mc_body_battery:          "La caméra a redémarré avec une batterie neuve. Vérifions qu'elle est de retour en ligne.",
    mc_eyebrow_network:       "Dépannage terminé",
    mc_title_network:         "Identifiants Wi-Fi renvoyés",
    mc_body_network:          "Les identifiants réseau ont été retransmis à la caméra. Vérifions qu'elle est de retour en ligne.",
    mc_eyebrow_image:         "Dépannage terminé",
    mc_title_image_clean:     "Image rétablie",
    mc_body_image_clean:      "La vue est de nouveau claire. Vérifions que tout fonctionne.",
    mc_eyebrow_swap:          "Caméra remplacée",
    mc_title_image_swap:      "Échange réussi",
    mc_body_image_swap:       "L'ancienne caméra a été retirée et la nouvelle est en place. Vérifions qu'elle est en ligne.",

    /* Maintenance-mode patches on existing pages */
    mt_save_return:           "Enregistrer et revenir",
    mt_fixed_it:              "C'est réglé",
    mt_coverage_updated:      "Image mise à jour",

    /* Network basics */
    mt_net_eyebrow:           "Dépannage réseau",
    mt_net_title:             "Vérifications rapides",
    mt_net_sub:               "Parcourez ces points avant de réappairer. La plupart des problèmes se règlent avec un petit ajustement.",
    mt_net_power_t:           "Pas d'alimentation, pas de signal",
    mt_net_power_b:           "Si la caméra n'a pas d'alimentation, elle ne peut pas communiquer. Vérifiez d'abord la batterie.",
    mt_net_cluster_t:         "D'autres caméras à proximité ont des soucis ?",
    mt_net_cluster_b:         "Si plusieurs caméras de la même allée sont en panne, le problème vient peut-être de la zone, pas de cet appareil.",
    mt_net_metal_t:           "Du métal au-dessus de la caméra",
    mt_net_metal_b:           "Les boîtes, emballages métalliques ou affiches au-dessus de la caméra peuvent bloquer le signal. Déplacez-les.",
    mt_net_water_t:           "De l'eau au-dessus de la caméra",
    mt_net_water_b:           "Un pack d'eau sur l'étagère du dessus, de la condensation ou un déversement à proximité peuvent absorber le signal.",
    mt_net_continue:          "Continuer pour réappairer la caméra",

    /* Coverage diagnostic */
    mt_cov_eyebrow:           "Dépannage image",
    mt_cov_q1_title:          "La caméra est-elle endommagée ?",
    mt_cov_q1_sub:            "Fissures sur le boîtier, objectif cassé, signes physiques de dommage.",
    mt_cov_q2_title:          "La caméra est-elle bloquée ?",
    mt_cov_q2_sub:            "Regardez si un produit, un panneau ou un emballage cache l'objectif.",
    mt_cov_q3_title:          "L'objectif est-il sale ?",
    mt_cov_q3_sub:            "Poussière, traces de doigts, condensation — tout ce qui peut brouiller la vue.",
    mt_cov_yes:               "Oui",
    mt_cov_no:                "Non",
    mt_cov_action_blocked:    "Dégagez l'obstruction, puis reprenez une photo.",
    mt_cov_action_dirty:      "Nettoyez délicatement l'objectif avec un chiffon doux, puis reprenez une photo.",
    mt_cov_continue_recapture: "Reprendre la photo",

    /* Coverage swap-confirmation side-modal — opens when "Is the camera damaged?" = Yes */
    mt_cov_swap_eyebrow:      "Caméra endommagée",
    mt_cov_swap_title:        "Remplaçons cette caméra",
    mt_cov_swap_loc_label:    "Emplacement",
    mt_cov_swap_body:         "Nous allons lancer une réinstallation guidée à cet emplacement. La nouvelle caméra remplacera l'ancienne dans le système.",
    mt_cov_swap_go:           "C'est parti",
    mt_cov_swap_cancel:       "Annuler",

    /* Validation flow — install-day audit (drill: zones → aisles → sections) */
    val_eyebrow:              "Validation",
    val_title_root:           "Vérifions ce site",
    val_sub_root:             "Examinez chaque zone et résolvez les problèmes avant la livraison.",
    val_title_zone:           "Zone {name}",
    val_sub_zone:             "Examinez chaque allée.",
    val_title_aisle:          "Allée {aisle}",
    val_sub_aisle:            "Examinez chaque rayon.",

    val_zone_label:           "Zone",
    val_aisle_label:          "Allée",
    val_section_label:        "Rayon",
    val_aisle_one:            "allée",
    val_aisle_many:           "allées",
    val_section_one:          "rayon",
    val_section_many:         "rayons",
    val_issue_one:            "problème",
    val_issue_many:           "problèmes",
    val_not_installed:        "Non installée",
    val_not_installed_meta:   "à installer",

    val_summary_all_clear:    "Tout est validé",
    val_summary_all_clear_sub:"Vous pouvez signer ce site.",
    val_summary_empty:        "Aucune donnée à vérifier",
    val_summary_action_red:   "À résoudre avant la livraison",
    val_summary_action_orange:"À résoudre avant la livraison",
    val_summary_action_grey:  "Installation à compléter",

    val_count_red_one:        "critique",
    val_count_red_many:       "critiques",
    val_count_orange_one:     "avertissement",
    val_count_orange_many:    "avertissements",
    val_count_grey_one:       "à installer",
    val_count_grey_many:      "à installer",

    val_signoff_btn:          "Signer ce site",
    val_signoff_success_title:"Site signé",
    val_signoff_success_sub:  "Cette installation est complète et validée pour la livraison.",
    val_signoff_success_done: "Retour à l'accueil",

    /* Section-detail side-modal */
    val_sd_eyebrow_clean:     "Rayon validé",
    val_sd_eyebrow_warning:   "À résoudre",
    val_sd_eyebrow_critical:  "Critique",
    val_sd_eyebrow_uninstalled:"Pas encore installée",
    val_sd_loc_label:         "Emplacement",
    val_sd_cam_label:         "Caméra",
    val_sd_issues_label:      "Problèmes détectés",
    val_sd_clean:             "Aucun problème détecté",
    val_sd_uninstalled:       "Pas encore installée",
    val_sd_uninstalled_sub:   "Terminez l'installation pour cet emplacement.",
    val_sd_fix:               "Dépanner",
    val_sd_recheck:           "Revérifier",
    val_sd_rechecking:        "Vérification…",
    val_sd_close:             "Fermer",
    val_sd_capture:           "Capturer l'image",
    val_sd_capture_blocked_battery: "Résolvez la batterie pour activer la capture",
    val_sd_capture_blocked_network: "Résolvez le réseau pour activer la capture",
    val_sd_capture_blocked_both:    "Résolvez la batterie et le réseau pour activer la capture",

    /* Common */
    common_back:          "Retour",
    common_next:          "Suivant",
    common_continue:      "Continuer",
    common_save:          "Enregistrer",
    common_cancel:        "Annuler",
    common_edit:          "Modifier",
    common_delete:        "Supprimer",
    common_confirm:       "Confirmer",
  },
  en: {
    login_welcome:        "Welcome",
    login_sub:            "Sign in to continue to Captana",
    login_email:          "Email",
    login_password:       "Password",
    login_email_ph:       "you@example.com",
    login_btn:            "Sign In",
    login_err_email:      "Please enter a valid email address.",
    login_err_pass:       "Password must be at least 6 characters.",
    login_lang_label:     "Language",

    loc_title:            "Select a store",
    loc_sub:              "Choose the site where you're working today",
    loc_type_hyper:       "Hypermarket",
    loc_type_super:       "Supermarket",
    loc_type_city:        "Urban Convenience",
    loc_type_express:     "Small Convenience",

    flow_title:           "Captana",
    flow_sub:             "Select a workflow to begin",
    flow_section_hw:      "Hardware management",
    flow_section_ops:     "Store operations",
    flow_mapping:         "Mapping",
    flow_mapping_desc:    "Build the store structure",
    flow_mapping_done:    "Mapping complete — tap to edit",
    flow_install:         "Installation",
    flow_install_desc:    "Install camera hardware",
    flow_install_locked:  "Please complete mapping first",
    flow_validation:      "Validation",
    flow_validation_desc: "Verify completed installs",
    flow_validation_locked:"Please complete mapping first",
    flow_validation_done: "Site validated & signed off",
    flow_maintenance:     "Maintenance",
    flow_maintenance_desc:"Diagnose and resolve issues",
    flow_director:        "Store Director",
    flow_director_desc:   "On-shelf availability dashboard",
    flow_section_mgr:     "Section Manager",
    flow_section_mgr_desc:"Assign and track tasks",
    flow_associate:       "Store Associate",
    flow_associate_desc:  "Assigned fill tasks",
    flow_change_store:    "change",

    tag_title:            "What price tags do you have?",
    tag_sub:              "Select the type of tags used in this store",
    tag_paper:            "Paper tags",
    tag_paper_desc:       "Printed, attached to the shelf",
    tag_digital:          "Digital ESL tags",
    tag_digital_desc:     "Electronic price display",

    verify_title:         "Let's verify the maker",
    verify_sub:           "Flip a digital tag over. Look for one of these markings on the back.",
    verify_marker_label:  "Look for:",
    verify_marker_a:      "SES-Imagotag",
    verify_marker_b:      "Vusion logo",
    verify_q:             "Do you see either of these markings?",
    verify_yes:           "Yes, it's Vusion",
    verify_no:            "No, it's not Vusion",

    confirmed_title:      "Great, you're set",
    confirmed_msg:        "Thank you for using Vusion ESL tags. No additional mapping is needed — you can begin installation.",
    confirmed_btn:        "Back to menu",

    /* Placeholder stubs (Phase 2) */
    stub_manual_title:    "Manual mapping",
    stub_manual_msg:      "Phase 2 — coming next.",

    /* Manual mapping — intros */
    mm_intro1_eyebrow:    "Manual mapping",
    mm_intro1_title:      "Let's create your digital store",
    mm_intro1_body:       "We'll record each physical location where a Captana camera will be installed. Installers will then select these locations until everything is installed.",
    mm_intro2_title:      "What does a Captana camera do?",
    mm_intro2_body:       "Each camera observes the shelf across from it and detects out-of-stock gaps on the shelves.",
    mm_intro3_title:      "No partner, no camera",
    mm_intro3_body:       "If a shelf has no \"partner\" across from it, it's not eligible for a camera.",
    mm_intro_step:        "Step",
    mm_intro_of:          "of",
    mm_intro_begin:       "Begin",

    /* Manual mapping — zone */
    mm_zone_eyebrow:      "Mapping",
    mm_zone_title_empty:  "Let's add your first zone",
    mm_zone_title_more:   "Add another zone?",
    mm_zone_sub_empty:    "Enter the zone name or code (e.g. A, Grocery, Fresh)",
    mm_zone_sub_more:     "Keep adding, or tell us there are no more",
    mm_zone_input_label:  "Zone name",
    mm_zone_input_ph:     "e.g. A",
    mm_zone_add_btn:      "Add zone",
    mm_zone_done_btn:     "No more zones",
    mm_zone_completed:    "Zones added",
    mm_zone_aisles:       "aisles",
    mm_zone_aisle:        "aisle",

    /* Manual mapping — aisle */
    mm_aisle_eyebrow:     "Zone",
    mm_aisle_page_eyebrow:"Adding aisles",
    mm_aisle_card_label:  "Aisle",
    mm_aisle_title_first: "First aisle number",
    mm_aisle_title_next:  "Add the next aisle?",
    mm_aisle_sub_first:   "What's the lowest aisle number in this zone?",
    mm_aisle_sub_next:    "We've suggested the next one. Change it if needed.",
    mm_aisle_input_label: "Aisle number",
    mm_aisle_add_btn:     "Set up this aisle",
    mm_aisle_done_btn:    "No more aisles in this zone",
    mm_aisle_completed:   "Aisles in this zone",
    mm_sections_completed:"Sections in this aisle",
    mm_aisle_sections:    "sections",
    mm_aisle_section:     "section",

    /* Manual mapping — aisle review grid */
    mm_aisle_review_title:"Let's review the aisles",
    mm_aisle_review_sub:  "Green = set up. Gray = we think it was skipped. You can go back if needed.",
    mm_aisle_review_ok:   "That's right, finish zone",
    mm_aisle_review_back: "Go back and edit",
    mm_aisle_skipped:     "skipped",

    /* Manual mapping — section setup */
    mm_sec_eyebrow:       "Aisle",
    mm_sec_page_eyebrow:  "Adding sections",
    mm_sec_first_title:   "First section number",
    mm_sec_first_sub:     "What's the lowest section number in this aisle?",
    mm_sec_first_input:   "Section number",
    mm_sec_first_btn:     "Set up this section",

    /* Manual mapping — looking-at */
    mm_look_eyebrow:      "Set up section",
    mm_look_title:        "What does this camera look at?",
    mm_look_sub:          "When mounted here, which aisle and section will it observe across the way?",
    mm_look_aisle:        "Aisle",
    mm_look_section:      "Section",
    mm_look_aisle_ph:     "e.g. 4",
    mm_look_section_ph:   "e.g. 12",
    mm_look_inferred:     "Suggested",
    mm_look_save_btn:     "Save section",

    /* Manual mapping — section landing (subsequent) */
    mm_sec_next_title:    "Next section",
    mm_sec_next_sub:      "The next number in sequence",
    mm_sec_setup_btn:     "Set up this section",
    mm_sec_skip_btn:      "Skip this section",
    mm_sec_done_btn:      "No more sections — go to next aisle",

    /* Manual mapping — section review */
    mm_sec_review_title:  "Let's review the sections",
    mm_sec_review_sub:    "Green = set up. Gray = skipped.",
    mm_sec_review_ok:     "That's right, finish aisle",
    mm_sec_review_back:   "Go back and edit",

    /* Manual mapping — final review */
    mm_review_eyebrow:    "Mapping",
    mm_review_title:      "Let's review your mapping",
    mm_review_sub:        "Tap any zone to edit",
    mm_review_summary:    "Summary",
    mm_review_zones:      "zones",
    mm_review_zone:       "zone",
    mm_review_aisles_total:"aisles",
    mm_review_sections_total:"sections",
    mm_review_confirm:    "Confirm and finish",
    mm_review_edit:       "Go back and edit",

    /* Toasts during mapping */
    mm_toast_aisle_done:  "Aisle complete",
    mm_toast_aisle_done_msg:"Moving on to the next one.",
    mm_toast_zone_done:   "Zone complete",
    mm_toast_zone_done_msg:"Nice progress!",
    mm_toast_no_zones:    "Add at least one zone first",
    mm_toast_no_aisles:   "Add at least one aisle first",

    /* Section edit sheet */
    sec_sheet_title:      "Section details",
    sec_sheet_looking:    "Target",
    sec_sheet_skipped:    "Skipped — not installed",
    sec_sheet_edit:       "Edit",
    sec_sheet_delete:     "Delete",
    sec_sheet_confirm_del:"Delete this section?",

    /* ====== INSTALL FLOW ====== */

    /* Vusion intro */
    inv_intro_eyebrow:    "Installation",
    inv_intro_title:      "Here's how this will go",
    inv_intro_step1_t:    "Scan the install-location tag",
    inv_intro_step1_b:    "On the shelf where you'll mount the camera",
    inv_intro_step2_t:    "Install the camera",
    inv_intro_step2_b:    "Insert battery, mount the camera, then activate via NFC",
    inv_intro_step3_t:    "Scan the target tag",
    inv_intro_step3_b:    "On the shelf across the way that the camera will observe",
    inv_intro_step4_t:    "Verify the view",
    inv_intro_step4_b:    "Capture an image and confirm the framing",
    inv_intro_begin:      "Begin",

    /* Scan install location */
    inv_scan_install_eyebrow: "Install camera",
    inv_scan_install_title:   "Scan the install-location tag",
    inv_scan_install_sub:     "Point your camera at the barcode on the tag for the shelf where you'll mount the camera.",
    inv_scan_status_label:    "Install-location tag",
    inv_scan_status_pending:  "Awaiting scan…",
    inv_scan_status_scanned:  "Scanned",
    inv_scan_status_pending_badge: "Pending",
    inv_scan_complete_label:  "Scan complete",
    inv_scan_tap_continue:    "Tap to continue",
    inv_scan_rescan:          "Rescan",
    inv_scan_manual:          "Manual entry",
    inv_scan_hint_caption:    "Scan the barcode on the lower edge of the tag",
    inv_scan_done:            "I'm done installing",
    inv_manual_title:         "Manual entry",
    inv_manual_sub:           "If the scan won't work, type the ID printed on the tag.",
    inv_manual_label:         "Tag ID",
    inv_manual_ph:            "e.g. 4Z1-9S8TW",
    inv_manual_hint:          "You'll find it printed below the barcode",
    inv_manual_submit:        "Confirm",

    /* Battery page */
    inv_batt_eyebrow:         "Step 2 of 4",
    inv_batt_title:           "Insert the battery",
    inv_batt_sub:             "Slide the battery into the camera. Follow the orientation shown.",
    inv_batt_status_label:    "Install location",
    inv_batt_confirm:         "Battery inserted",
    inv_batt_guide_link:      "View installation guide",
    inv_batt_toast_title:     "Now install the camera",
    inv_batt_toast_msg:       "Mount the camera in its final location before continuing.",
    inv_batt_toast_action:    "View guide",

    /* NFC tap */
    inv_nfc_eyebrow:          "Step 2 of 4",
    inv_nfc_title:            "Hold your phone to the camera",
    inv_nfc_sub:              "Raise the top of your phone toward the installed camera.",
    inv_nfc_active_title:     "Activating",
    inv_nfc_active_sub:       "Connecting to the camera…",
    inv_nfc_done_title:       "Camera activated",
    inv_nfc_done_sub:         "You can lower your phone and continue.",
    inv_nfc_steady:           "Hold steady",
    inv_nfc_wifi_sending:     "Sending Wi-Fi credentials…",
    inv_nfc_wifi_sent:        "Wi-Fi credentials sent",
    inv_nfc_camid_label:      "Camera",

    /* Guide stub */
    inv_guide_eyebrow:        "Installation",
    inv_guide_title:          "Installation guide",
    inv_guide_soon_title:     "Coming soon",
    inv_guide_soon_msg:       "Step-by-step instructions for this step will arrive in a future release.",

    /* Role stub — shared placeholder for Validation / Director / Section Mgr / Associate */
    role_stub_eyebrow:        "Preview",
    role_stub_soon_title:     "Coming soon",
    role_stub_tag:            "Next release",
    role_stub_msg_validation: "Read-only audit of completed installs. Coming in a future release.",
    role_stub_msg_director:   "Store-wide on-shelf availability dashboard. Coming in a future release.",
    role_stub_msg_section_mgr:"Assign and track fill tasks across your team. Coming in a future release.",
    role_stub_msg_associate:  "List of fill tasks assigned to you. Coming in a future release.",

    /* Target tag scan — Step 3 of 4 */
    inv_tscan_eyebrow:        "Install camera",
    inv_tscan_title:          "Scan the target tag",
    inv_tscan_sub:            "Scan the tag on the shelf across the way — the one the camera will observe.",
    inv_tscan_install_label:  "Camera installed",
    inv_tscan_target_label:   "Target — across",
    inv_tscan_target_pending: "Awaiting scan…",
    inv_tscan_target_badge:   "Pending",
    inv_tscan_target_scanned: "Scanned",
    inv_tscan_no_target:      "No target shelf",
    inv_tscan_manual:         "Manual entry",
    inv_tscan_complete_label: "Scan complete",
    inv_tscan_tap_continue:   "Tap to continue",
    inv_tscan_hint_caption:   "The tag is on the shelf facing the camera",
    inv_tscan_illu_camera:    "Camera",
    inv_tscan_illu_camera_2:  "(you are here)",
    inv_tscan_illu_scan:      "Scan",
    inv_tscan_illu_scan_2:    "this tag",
    inv_tscan_toast_title:    "Turn toward the shelf across the way",
    inv_tscan_toast_msg:      "Scan the tag on the shelf the camera will observe.",
    inv_tscan_no_target_toast_title: "Move the camera",
    inv_tscan_no_target_toast_msg:   "Pick a different location where there's a shelf across the way.",

    /* Capture — Step 4 of 4 part 1 */
    inv_cap_eyebrow:          "Install camera",
    inv_cap_title:            "Verify the view",
    inv_cap_sub:              "The camera will capture an image. Stand clear of the area being observed.",
    inv_cap_install_label:    "Camera installed",
    inv_cap_target_label:     "Target — across",
    inv_cap_ready:            "Ready to capture",
    inv_cap_btn:              "Capture image",
    inv_cap_capturing:        "Capturing…",

    /* Confirm coverage — Step 4 of 4 part 2 */
    inv_conf_eyebrow:         "Step 4 of 4",
    inv_conf_title:           "Check the framing",
    inv_conf_notice:          "Make sure you can see the entire shelf across the way.",
    inv_conf_caption:         "If the shelf isn't fully visible, move the camera and take another photo.",
    inv_conf_retake:          "Retake",
    inv_conf_confirm:         "Shelf fully visible",
    inv_conf_help:            "Help me frame it",

    /* Frame guide */
    inv_fg_eyebrow:           "Framing help",
    inv_fg_title:             "How to reposition the camera",
    inv_fg_sub:               "Look at your photo and identify which side is missing, then physically move the camera.",
    inv_fg_diag_top:          "TOP",
    inv_fg_diag_bottom:       "BOTTOM",
    inv_fg_diag_left:         "LEFT",
    inv_fg_diag_right:        "RIGHT",
    inv_fg_top_t:             "The top of the shelf is missing",
    inv_fg_top_b:             "Move the camera up one shelf level.",
    inv_fg_bot_t:             "The bottom of the shelf is missing",
    inv_fg_bot_b:             "Move the camera down one shelf level.",
    inv_fg_right_t:           "The right side is missing",
    inv_fg_right_b:           "Facing the camera, slide it to the left along the rail.",
    inv_fg_left_t:            "The left side is missing",
    inv_fg_left_b:            "Facing the camera, slide it to the right along the rail.",
    inv_fg_back:              "I moved the camera — retake",

    /* Section-complete modal */
    inv_sc_eyebrow:           "Section complete",
    inv_sc_title:             "Camera installed",
    inv_sc_install_label:     "Camera installed",
    inv_sc_target_label:      "Target observed",
    inv_sc_question:          "What would you like to do?",
    inv_sc_done:              "I'm done",
    inv_sc_next:              "Next camera",

    /* Manual install — picker pages */
    im_eyebrow:               "Install camera",
    im_zone_title:            "Choose a zone",
    im_zone_sub:              "Pick the zone where you're installing the camera.",
    im_aisle_title:           "Choose an aisle",
    im_aisle_sub:             "Pick the aisle in this zone where the camera goes.",
    im_section_title:         "Choose a section",
    im_section_sub:           "Pick the section where you're mounting the camera.",
    im_zone:                  "Zone",
    im_aisle:                 "Aisle",
    im_section:               "Section",
    im_of:                    "of",
    im_installed:             "installed",
    im_complete:              "Complete",
    im_observes:              "Observes",
    im_observing:             "Observing",
    im_camera_installed:      "Camera installed",
    im_installed_badge:       "Installed",

    /* Reinstall side-modal */
    im_re_eyebrow:            "Already installed",
    im_re_title:              "Replace this camera?",
    im_re_card_label:         "Currently installed",
    im_re_body:               "Replacing will remove the existing camera from the system and start a fresh install at",
    im_re_cancel:             "Cancel",
    im_re_confirm:            "Replace camera",

    /* Milestone — section installed */
    ms_sec_eyebrow:           "Section complete",
    ms_sec_title:             "Camera installed",
    ms_sec_progress:          "sections done in Aisle",
    ms_sec_next:              "Next section",

    /* Milestone — aisle complete */
    ms_aisle_eyebrow:         "Aisle complete!",
    ms_aisle_title:           "Aisle",
    ms_aisle_done_suffix:     "done",
    ms_aisle_card_top:        "Zone",
    ms_aisle_card_bot:        "sections installed",
    ms_aisle_progress:        "aisles done in Zone",
    ms_aisle_next:            "Next aisle",

    /* Milestone — zone complete */
    ms_zone_eyebrow:          "Zone complete!",
    ms_zone_title_suffix:     "— finished",
    ms_zone_total_label:      "Total installed",
    ms_zone_total_unit:       "cameras across",
    ms_zone_total_unit_2:     "aisles",
    ms_zone_progress:         "zones done",
    ms_zone_next:             "Next zone",

    /* Maintenance — entry page */
    mt_eyebrow:               "Maintenance",
    mt_title:                 "Assigned work",
    mt_progress_label:        "Progress",
    mt_progress_all_done:     "All done!",
    mt_filter_battery:        "Battery",
    mt_filter_network:        "Network",
    mt_filter_coverage:       "Image",
    mt_filter_hardware:       "Hardware",
    mt_zone:                  "Zone",
    mt_items_one:             "item",
    mt_items_many:            "items",
    mt_help_me:               "Help Me!",
    mt_check:                 "Check",
    mt_checking:              "Checking…",
    mt_last_seen:             "Last seen",
    mt_completed:             "Completed",
    mt_completed_count:       "done",
    mt_check_remaining:       "Check remaining work",
    mt_remaining_title:       "item(s) remaining",
    mt_remaining_body:        "You still have uncompleted work.",
    mt_hidden_title:          "items hidden by filters",
    mt_clear_filters:         "Clear all filters",
    mt_keep_filters:          "Keep filters & continue",
    mt_all_done_title:        "All work complete!",
    mt_all_done_body:         "Every assigned item has been resolved. Great work.",

    /* Severity labels */
    mt_sev_battery_crit:      "Dead battery",
    mt_sev_battery_warn:      "Low battery",
    mt_sev_network_crit:      "Offline",
    mt_sev_network_warn:      "Low signal",
    mt_sev_coverage_crit:     "No image",
    mt_sev_coverage_warn:     "Blurry image",
    mt_sev_hardware_crit:     "Hardware fault",

    /* Rail-options side-modal */
    mt_rail_eyebrow:          "Rail options",
    mt_rail_camera_label:     "Installed camera",
    mt_rail_observing_label:  "Observing",
    mt_rail_installed_label:  "Installed",
    mt_rail_by:               "by",
    mt_rail_body:             "If this camera is damaged or unrecoverable, replace it. The replacement starts a fresh install at this rail.",
    mt_rail_replace:          "Replace camera",
    mt_rail_close:            "Close",

    /* Maintenance — battery remove page (page 1 of 2 in battery troubleshooting) */
    mbr_eyebrow:              "Battery troubleshooting",
    mbr_title:                "Remove the discharged battery",
    mbr_sub:                  "Open the compartment and take out the used battery. You'll install a fresh one next.",
    mbr_loc_label:            "Location",
    mbr_confirm:              "Battery removed",

    /* Maintenance — battery insert (page 2 of 2). Overrides on install_v_battery when reached from maintenance. */
    mbi_title:                "Insert a fresh battery",
    mbi_sub:                  "Slide a charged battery into the compartment, following the orientation shown.",

    /* Maintenance — network remove (page 1 of 2 in network troubleshooting) */
    mnr_eyebrow:              "Network troubleshooting",
    mnr_title:                "Remove the battery",
    mnr_sub:                  "Take the battery out of the camera. We'll wait about 20 seconds before you put it back.",
    mnr_loc_label:            "Location",
    mnr_confirm:              "Battery removed",
    mnr_count_label:          "Waiting for reboot",
    mnr_count_msg:            "Keep the battery out of the camera…",

    /* Maintenance — network resend (overlays install_v_nfc when in maintenance/network mode).
       Critical: this is NOT activation — the camera is already provisioned, we're re-pushing
       Wi-Fi credentials so it can rejoin the network. */
    mnr2_title:               "Reinsert the battery and hold up your phone",
    mnr2_sub:                 "Put the battery back in, then raise the top of your phone toward the camera to resend its credentials.",
    mnr2_active_title:        "Resending",
    mnr2_active_sub:          "Retransmitting Wi-Fi credentials…",
    mnr2_done_title:          "Credentials resent",
    mnr2_done_sub:            "You can lower your phone and continue.",
    mnr2_wifi_sending:        "Resending Wi-Fi credentials…",
    mnr2_wifi_sent:           "Credentials retransmitted",

    /* Maintenance completion side-modal */
    mc_location_label:        "Location",
    mc_camera_label:          "Camera",
    mc_continue_btn:          "Continue to recheck",
    mc_continue_btn_validation:"Back to validation",
    mc_eyebrow_battery:       "Troubleshooting complete",
    mc_title_battery:         "Battery replaced",
    mc_body_battery:          "The camera rebooted with a fresh battery. Let's verify it's back online.",
    mc_eyebrow_network:       "Troubleshooting complete",
    mc_title_network:         "Wi-Fi credentials resent",
    mc_body_network:          "The network credentials were retransmitted to the camera. Let's verify it's back online.",
    mc_eyebrow_image:         "Troubleshooting complete",
    mc_title_image_clean:     "Image restored",
    mc_body_image_clean:      "The view is clear again. Let's verify everything's working.",
    mc_eyebrow_swap:          "Camera swapped",
    mc_title_image_swap:      "Swap successful",
    mc_body_image_swap:       "The old camera was removed and the new one is in place. Let's verify it's online.",

    /* Maintenance-mode patches on existing pages */
    mt_save_return:           "Save & return",
    mt_fixed_it:              "I fixed it",
    mt_coverage_updated:      "Image updated",

    /* Network basics */
    mt_net_eyebrow:           "Network troubleshooting",
    mt_net_title:             "Quick checks first",
    mt_net_sub:               "Walk through these before re-pairing. Many issues clear up after a small fix.",
    mt_net_power_t:           "No power, no signal",
    mt_net_power_b:           "If the camera has no power, it can't talk to the network. Check the battery first.",
    mt_net_cluster_t:         "Other cameras nearby acting up?",
    mt_net_cluster_b:         "If a few cameras in the same aisle are down, the problem may be the area, not this device.",
    mt_net_metal_t:           "Metal hanging over the camera",
    mt_net_metal_b:           "Cans, foil packaging, or signs draped above the camera can block the signal. Move them.",
    mt_net_water_t:           "Water sitting above the camera",
    mt_net_water_b:           "A case of water on the shelf above, condensation, or a spill nearby will absorb the signal.",
    mt_net_continue:          "Continue to re-pair the camera",

    /* Coverage diagnostic */
    mt_cov_eyebrow:           "Image troubleshooting",
    mt_cov_q1_title:          "Is the camera damaged?",
    mt_cov_q1_sub:            "Cracks on the housing, broken lens, physical signs of damage.",
    mt_cov_q2_title:          "Is the camera blocked?",
    mt_cov_q2_sub:             "Look for product, signage, or packaging covering the lens.",
    mt_cov_q3_title:          "Is the lens dirty?",
    mt_cov_q3_sub:            "Dust, fingerprints, condensation — anything that would blur the view.",
    mt_cov_yes:               "Yes",
    mt_cov_no:                "No",
    mt_cov_action_blocked:    "Clear the obstruction, then retake the photo.",
    mt_cov_action_dirty:      "Gently clean the lens with a soft cloth, then retake the photo.",
    mt_cov_continue_recapture: "Retake photo",

    /* Coverage swap-confirmation side-modal — opens when "Is the camera damaged?" = Yes */
    mt_cov_swap_eyebrow:      "Camera damaged",
    mt_cov_swap_title:        "Let's swap this camera",
    mt_cov_swap_loc_label:    "Location",
    mt_cov_swap_body:         "We'll start a guided reinstall at this location. The new camera will replace the old one in the system.",
    mt_cov_swap_go:           "Let's do it",
    mt_cov_swap_cancel:       "Cancel",

    /* Validation flow — install-day audit (drill: zones → aisles → sections) */
    val_eyebrow:              "Validation",
    val_title_root:           "Let's verify this site",
    val_sub_root:             "Walk each zone and resolve any issues before handoff.",
    val_title_zone:           "Zone {name}",
    val_sub_zone:             "Walk each aisle.",
    val_title_aisle:          "Aisle {aisle}",
    val_sub_aisle:            "Walk each section.",

    val_zone_label:           "Zone",
    val_aisle_label:          "Aisle",
    val_section_label:        "Section",
    val_aisle_one:            "aisle",
    val_aisle_many:           "aisles",
    val_section_one:          "section",
    val_section_many:         "sections",
    val_issue_one:            "issue",
    val_issue_many:           "issues",
    val_not_installed:        "Not installed",
    val_not_installed_meta:   "to install",

    val_summary_all_clear:    "Everything's validated",
    val_summary_all_clear_sub:"You can sign off this site.",
    val_summary_empty:        "Nothing to verify",
    val_summary_action_red:   "Resolve before handoff",
    val_summary_action_orange:"Resolve before handoff",
    val_summary_action_grey:  "Install remaining cameras",

    val_count_red_one:        "critical",
    val_count_red_many:       "critical",
    val_count_orange_one:     "warning",
    val_count_orange_many:    "warnings",
    val_count_grey_one:       "to install",
    val_count_grey_many:      "to install",

    val_signoff_btn:          "Sign off this site",
    val_signoff_success_title:"Site signed off",
    val_signoff_success_sub:  "This install is complete and validated for handoff.",
    val_signoff_success_done: "Back to home",

    /* Section-detail side-modal */
    val_sd_eyebrow_clean:     "Section validated",
    val_sd_eyebrow_warning:   "Resolve to validate",
    val_sd_eyebrow_critical:  "Critical",
    val_sd_eyebrow_uninstalled:"Not yet installed",
    val_sd_loc_label:         "Location",
    val_sd_cam_label:         "Camera",
    val_sd_issues_label:      "Detected issues",
    val_sd_clean:             "No issues detected",
    val_sd_uninstalled:       "Not yet installed",
    val_sd_uninstalled_sub:   "Complete installation for this location.",
    val_sd_fix:               "Fix",
    val_sd_recheck:           "Recheck",
    val_sd_rechecking:        "Checking…",
    val_sd_close:             "Close",
    val_sd_capture:           "Capture Image",
    val_sd_capture_blocked_battery: "Resolve battery to enable capture",
    val_sd_capture_blocked_network: "Resolve network to enable capture",
    val_sd_capture_blocked_both:    "Resolve battery and network to enable capture",

    common_back:          "Back",
    common_next:          "Next",
    common_continue:      "Continue",
    common_save:          "Save",
    common_cancel:        "Cancel",
    common_edit:          "Edit",
    common_delete:        "Delete",
    common_confirm:       "Confirm",
  },
};

/* ----------- Language ----------- */
function getLang() {
  return sessionStorage.getItem('lang') || 'fr';
}
function setLang(code) {
  sessionStorage.setItem('lang', code);
  // Avatar initials track the language
  sessionStorage.setItem('userInitials', code === 'fr' ? 'AB' : 'CW');
}
function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

/* Translate a page: any element with [data-i18n="key"] gets its text replaced.
   Inputs with [data-i18n-ph="key"] get their placeholder replaced. */
function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.documentElement.setAttribute('lang', getLang());
}

/* ----------- Stores (the 4 Carrefour locations) ----------- */
const STORES = [
  {
    id: 'auteuil',
    typeKey: 'loc_type_hyper',
    name: 'Carrefour Paris Auteuil',
    address: '1 Avenue du Général Sarrail, 75016 Paris',
    color: '#2563EB',
  },
  {
    id: 'lyon',
    typeKey: 'loc_type_super',
    name: 'Carrefour Market Paris Rue de Lyon',
    address: '37 Rue de Lyon, 75012 Paris',
    color: '#10B981',
  },
  {
    id: 'voltaire',
    typeKey: 'loc_type_city',
    name: 'Carrefour City Paris Voltaire',
    address: '74 Boulevard Voltaire, 75011 Paris',
    color: '#F59E0B',
  },
  {
    id: 'montmartre',
    typeKey: 'loc_type_express',
    name: 'Carrefour Express Montmartre',
    address: '7 Rue de Montmartre, 75001 Paris',
    color: '#EF4444',
  },
];

/* ----------- Mapping state (used by Phase 2/3) ----------- */
function getMappingStatus() {
  // 'none' | 'vusion' | 'manual'
  return sessionStorage.getItem('mappingStatus') || 'none';
}
function setMappingStatus(status) {
  sessionStorage.setItem('mappingStatus', status);
}

/* ----------- Mapping data model -----------
   Shape:
   {
     zones: [
       {
         id: 'z_xxx',
         name: 'A',
         aisles: [
           {
             id: 'a_xxx',
             number: 1,         // user-entered number
             skipped: false,    // true if we inferred a skip
             sections: [
               {
                 id: 's_xxx',
                 number: 1,
                 skipped: false,
                 lookAtAisle: '4',
                 lookAtSection: '1',
               }
             ]
           }
         ]
       }
     ]
   }
*/
const MAP_KEY = 'captanaMap';
function uid(prefix) { return prefix + '_' + Math.random().toString(36).slice(2, 9); }

function getMap() {
  const raw = sessionStorage.getItem(MAP_KEY);
  if (!raw) return { zones: [] };
  try { return JSON.parse(raw); } catch { return { zones: [] }; }
}
function saveMap(m) { sessionStorage.setItem(MAP_KEY, JSON.stringify(m)); }
function resetMap() { sessionStorage.removeItem(MAP_KEY); }

function findZone(map, zoneId)   { return map.zones.find(z => z.id === zoneId); }
function findAisle(zone, aisleId){ return zone.aisles.find(a => a.id === aisleId); }
function findSection(aisle, secId){ return aisle.sections.find(s => s.id === secId); }

/* Add a zone, return it */
function addZone(name) {
  const m = getMap();
  const z = { id: uid('z'), name: name.trim(), aisles: [], completed: false };
  m.zones.push(z);
  saveMap(m);
  return z;
}
/* Mark a zone complete (user hit "that's right" on the aisle review grid) */
function setZoneCompleted(zoneId, completed) {
  const m = getMap();
  const z = findZone(m, zoneId);
  if (!z) return;
  z.completed = !!completed;
  saveMap(m);
}
/* Add an aisle to a zone with auto-skip detection */
function addAisle(zoneId, number) {
  const m = getMap();
  const z = findZone(m, zoneId);
  if (!z) return null;
  number = parseInt(number, 10);

  // Adding/editing a zone re-opens it; clear completed flag
  z.completed = false;

  // Infer skipped aisles between previous max real aisle and this one
  const reals = z.aisles.filter(a => !a.skipped).map(a => a.number);
  const prevMax = reals.length ? Math.max(...reals) : null;
  if (prevMax !== null && number > prevMax + 1) {
    for (let n = prevMax + 1; n < number; n++) {
      // Only add a placeholder if we don't already have one for that number
      if (!z.aisles.find(a => a.number === n)) {
        z.aisles.push({ id: uid('a'), number: n, skipped: true, sections: [], completed: false, defaultLookAtAisle: '' });
      }
    }
  }

  const aisle = { id: uid('a'), number, skipped: false, sections: [], completed: false, defaultLookAtAisle: '' };
  z.aisles.push(aisle);
  // Keep aisles sorted by number for clean display
  z.aisles.sort((a,b) => a.number - b.number);
  saveMap(m);
  return aisle;
}
/* Mark an aisle complete (user hit "that's right" on the section review grid) */
function setAisleCompleted(zoneId, aisleId, completed) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return;
  const a = findAisle(z, aisleId); if (!a) return;
  a.completed = !!completed;
  saveMap(m);
}
/* Remember the user's chosen target aisle for this aisle's cameras */
function setDefaultLookAtAisle(zoneId, aisleId, value) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return;
  const a = findAisle(z, aisleId); if (!a) return;
  a.defaultLookAtAisle = String(value);
  saveMap(m);
}
/* Suggest the next aisle number in a zone */
function nextAisleNumber(zoneId) {
  const m = getMap();
  const z = findZone(m, zoneId);
  if (!z || !z.aisles.length) return 1;
  const reals = z.aisles.filter(a => !a.skipped).map(a => a.number);
  if (!reals.length) return 1;
  return Math.max(...reals) + 1;
}

/* Add a section to an aisle with skip detection (skipped sections are first-class) */
function addSection(zoneId, aisleId, sectionData) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return null;
  const a = findAisle(z, aisleId); if (!a) return null;

  // Adding to an aisle re-opens it; clear completed flag
  a.completed = false;

  const section = {
    id: uid('s'),
    number: parseInt(sectionData.number, 10),
    skipped: !!sectionData.skipped,
    lookAtAisle:   sectionData.lookAtAisle   || '',
    lookAtSection: sectionData.lookAtSection || '',
  };
  a.sections.push(section);
  a.sections.sort((x,y) => x.number - y.number);
  saveMap(m);
  return section;
}
/* Update an existing section in place (keeps id, replaces fields) */
function updateSection(zoneId, aisleId, sectionId, patch) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return null;
  const a = findAisle(z, aisleId); if (!a) return null;
  const s = findSection(a, sectionId); if (!s) return null;

  // Editing a section means the aisle is no longer "signed off"
  a.completed = false;

  Object.assign(s, patch);
  if ('number' in patch) s.number = parseInt(patch.number, 10);
  a.sections.sort((x,y) => x.number - y.number);
  saveMap(m);
  return s;
}
/* Delete a section by id */
function deleteSection(zoneId, aisleId, sectionId) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return false;
  const a = findAisle(z, aisleId); if (!a) return false;
  a.sections = a.sections.filter(s => s.id !== sectionId);
  a.completed = false;
  saveMap(m);
  return true;
}
function nextSectionNumber(zoneId, aisleId) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return 1;
  const a = findAisle(z, aisleId); if (!a || !a.sections.length) return 1;
  return Math.max(...a.sections.map(s => s.number)) + 1;
}

/* Inference: when adding a section in aisle X, what aisle/section is it likely looking at?
   Priority: 1) aisle's remembered defaultLookAtAisle from a prior override
             2) heuristic — aisle one above (X+1) if exists, else X-1
   Section number always defaults to current section number.  */
function inferLookAt(zoneId, aisleId, sectionNumber) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return { aisle: '', section: sectionNumber || '' };
  const a = findAisle(z, aisleId); if (!a) return { aisle: '', section: sectionNumber || '' };

  // 1) Use remembered override if available
  if (a.defaultLookAtAisle) {
    return { aisle: a.defaultLookAtAisle, section: String(sectionNumber) };
  }

  // 2) Heuristic
  const sameZoneAisleNumbers = z.aisles.map(x => x.number);
  let target = a.number + 1;
  if (!sameZoneAisleNumbers.includes(target)) target = a.number - 1;
  return { aisle: String(target > 0 ? target : a.number + 1), section: String(sectionNumber) };
}

/* Aggregate counts for the summary screen */
function mapCounts() {
  const m = getMap();
  let zones = m.zones.length, aisles = 0, sections = 0;
  m.zones.forEach(z => {
    z.aisles.forEach(a => {
      if (!a.skipped) aisles++;
      a.sections.forEach(s => { if (!s.skipped) sections++; });
    });
  });
  return { zones, aisles, sections };
}

/* ──────────────────── Install state helpers ────────────────────
   Sections gain two install fields:
     - installed: bool — true if a camera is mounted
     - cameraId:  string — the registered camera id (e.g. "tc2ld-0000345")
   Skipped sections are excluded from all install math — you don't install on them.
   Skipped aisles likewise: their sections never count.                          */

function markSectionInstalled(zoneId, aisleId, sectionId, cameraId) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return null;
  const a = findAisle(z, aisleId); if (!a) return null;
  const s = findSection(a, sectionId); if (!s) return null;
  s.installed = true;
  s.cameraId = cameraId || s.cameraId || '';
  saveMap(m);
  return s;
}

/* Count installed/total for a given aisle (excludes skipped sections). */
function aisleInstallStats(zoneId, aisleId) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return { installed: 0, total: 0 };
  const a = findAisle(z, aisleId); if (!a) return { installed: 0, total: 0 };
  if (a.skipped) return { installed: 0, total: 0 };
  let installed = 0, total = 0;
  a.sections.forEach(s => {
    if (s.skipped) return;
    total++;
    if (s.installed) installed++;
  });
  return { installed, total };
}

/* Count installed/total for a given zone (across all non-skipped aisles). */
function zoneInstallStats(zoneId) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return { installed: 0, total: 0, aislesDone: 0, aislesTotal: 0 };
  let installed = 0, total = 0, aislesDone = 0, aislesTotal = 0;
  z.aisles.forEach(a => {
    if (a.skipped) return;
    aislesTotal++;
    let aInstalled = 0, aTotal = 0;
    a.sections.forEach(s => {
      if (s.skipped) return;
      aTotal++;
      if (s.installed) aInstalled++;
    });
    installed += aInstalled;
    total += aTotal;
    if (aTotal > 0 && aInstalled === aTotal) aislesDone++;
  });
  return { installed, total, aislesDone, aislesTotal };
}

/* Count installed/total across the whole map. */
function mapInstallStats() {
  const m = getMap();
  let installed = 0, total = 0, zonesDone = 0, zonesTotal = 0;
  m.zones.forEach(z => {
    zonesTotal++;
    const zs = zoneInstallStats(z.id);
    installed += zs.installed;
    total += zs.total;
    if (zs.total > 0 && zs.installed === zs.total) zonesDone++;
  });
  return { installed, total, zonesDone, zonesTotal };
}

/* Decide which celebration flavor to show after a section just got installed.
   Returns 'section' | 'aisle' | 'zone' — the highest-level milestone hit. */
function milestoneAfterInstall(zoneId, aisleId) {
  const aStats = aisleInstallStats(zoneId, aisleId);
  if (aStats.total === 0 || aStats.installed < aStats.total) return 'section';
  // Aisle is done. Is the whole zone done too?
  const zStats = zoneInstallStats(zoneId);
  if (zStats.installed === zStats.total) return 'zone';
  return 'aisle';
}

/* ──────────────────── Maintenance completion side-modal ────────────────────
   One-source-of-truth right-side modal used at the end of every maintenance
   troubleshooting flow. Content varies by what was fixed (battery / network /
   image cleaned / camera swapped), but the layout, animation, and behavior are
   shared. The modal injects itself into the page on first call so individual
   troubleshooting pages stay clean.

   Usage:
     showMaintCompletionModal({
       flow: 'battery' | 'network' | 'image_clean' | 'image_swap',
       location:    'A · 4 · 5',
       cameraId:    'tc2ld-0000111',   // current camera (or new camera if swapped)
       oldCameraId: 'tc2ld-0000000',   // only for image_swap, shown struck-through
       onContinue:  () => { ... }      // called when "Continue to recheck" tapped
     });

   The Continue handler should clean up maintenanceContext and route back to
   maintenance.html with the right ?resolved/?cleared query params.
*/
function ensureMaintCompletionModalDOM() {
  if (document.getElementById('mcOverlay')) return;

  const css = `
    .mc-overlay { position: fixed; inset: 0; background: rgba(17,24,39,0.55); backdrop-filter: blur(2px); display: none; z-index: 900; animation: mcFadeIn .25s ease both; }
    .mc-overlay.open { display: block; }
    @keyframes mcFadeIn { from { opacity: 0; } to { opacity: 1; } }
    .mc-sheet {
      position: fixed;
      top: 18%; right: 0;
      height: 64%;
      width: min(80vw, 312px);
      background: #fff;
      border-radius: 20px 0 0 20px;
      box-shadow: -12px 0 32px rgba(0,0,0,0.25);
      z-index: 901;
      display: none;
      flex-direction: column;
      padding: 22px 20px;
      transform: translateX(100%);
      transition: transform .35s cubic-bezier(.2,.8,.2,1);
    }
    @media (min-width: 391px) { .mc-sheet { right: max(calc(50% - 195px), 0px); } }
    .mc-sheet.open { display: flex; transform: translateX(0); }
    .mc-head { display: flex; align-items: center; gap: 12px; }
    .mc-head > div:last-child { flex: 1; min-width: 0; }
    .mc-icon-wrap { width: 44px; height: 44px; border-radius: 12px; background: var(--c-green-soft); border: 1.5px solid var(--c-green-line); display: flex; align-items: center; justify-content: center; color: var(--c-green); flex-shrink: 0; }
    .mc-icon-wrap svg { width: 22px; height: 22px; }
    .mc-eyebrow { font-size: 10px; font-weight: 800; color: var(--c-green); letter-spacing: .5px; text-transform: uppercase; }
    .mc-title { font-size: 17px; font-weight: 800; color: var(--c-ink); margin-top: 2px; line-height: 1.25; }
    .mc-info { background: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 14px; padding: 14px; margin-top: 16px; }
    .mc-info-row { display: flex; align-items: center; gap: 10px; }
    .mc-info-row + .mc-info-row { margin-top: 10px; padding-top: 10px; border-top: 1px dashed #E5E7EB; }
    .mc-info-tile { width: 30px; height: 30px; border-radius: 9px; background: #F3F4F6; color: var(--c-muted); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .mc-info-tile svg { width: 16px; height: 16px; }
    .mc-info-text { flex: 1; min-width: 0; }
    .mc-info-label { font-size: 9px; font-weight: 700; color: var(--c-muted); text-transform: uppercase; letter-spacing: .5px; }
    .mc-info-value { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; font-weight: 800; color: var(--c-ink); margin-top: 1px; letter-spacing: 1px; }
    .mc-info-value-old { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; font-weight: 600; color: var(--c-muted-2); text-decoration: line-through; margin-top: 2px; letter-spacing: 1px; }
    .mc-body { font-size: 12px; color: var(--c-muted); font-weight: 500; line-height: 1.45; margin-top: 16px; }
    .mc-actions { margin-top: auto; padding-top: 16px; }
    .mc-btn-continue {
      width: 100%; padding: 14px;
      background: var(--c-blue); color: #fff;
      border: none; border-radius: 14px;
      font-family: inherit; font-size: 14px; font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(37,99,235,.30);
      display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .mc-btn-continue svg { width: 16px; height: 16px; }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const overlay = document.createElement('div');
  overlay.className = 'mc-overlay';
  overlay.id = 'mcOverlay';
  document.body.appendChild(overlay);

  const sheet = document.createElement('div');
  sheet.className = 'mc-sheet';
  sheet.id = 'mcSheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.innerHTML = `
    <div class="mc-head">
      <div class="mc-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div>
        <div class="mc-eyebrow" id="mcEyebrow"></div>
        <div class="mc-title" id="mcTitle"></div>
      </div>
    </div>
    <div class="mc-info">
      <div class="mc-info-row">
        <div class="mc-info-tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <div class="mc-info-text">
          <div class="mc-info-label" id="mcLocLabel">Emplacement</div>
          <div class="mc-info-value" id="mcLocValue">—</div>
        </div>
      </div>
      <div class="mc-info-row">
        <div class="mc-info-tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12.5" r="3"/></svg></div>
        <div class="mc-info-text">
          <div class="mc-info-label" id="mcCamLabel">Caméra</div>
          <div class="mc-info-value" id="mcCamValue">—</div>
          <div class="mc-info-value-old" id="mcCamOldValue" style="display:none;"></div>
        </div>
      </div>
    </div>
    <div class="mc-body" id="mcBody"></div>
    <div class="mc-actions">
      <button class="mc-btn-continue" id="mcContinueBtn" type="button">
        <span id="mcContinueLabel">Continuer pour revérifier</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  `;
  document.body.appendChild(sheet);
}

function showMaintCompletionModal(opts) {
  ensureMaintCompletionModalDOM();

  /* Flow-specific copy maps */
  const flowCopy = {
    battery: {
      eyebrowKey: 'mc_eyebrow_battery',
      titleKey:   'mc_title_battery',
      bodyKey:    'mc_body_battery',
    },
    network: {
      eyebrowKey: 'mc_eyebrow_network',
      titleKey:   'mc_title_network',
      bodyKey:    'mc_body_network',
    },
    image_clean: {
      eyebrowKey: 'mc_eyebrow_image',
      titleKey:   'mc_title_image_clean',
      bodyKey:    'mc_body_image_clean',
    },
    image_swap: {
      eyebrowKey: 'mc_eyebrow_swap',
      titleKey:   'mc_title_image_swap',
      bodyKey:    'mc_body_image_swap',
    },
  };
  const copy = flowCopy[opts.flow] || flowCopy.battery;

  document.getElementById('mcEyebrow').textContent  = t(copy.eyebrowKey);
  document.getElementById('mcTitle').textContent    = t(copy.titleKey);
  document.getElementById('mcBody').textContent     = t(copy.bodyKey);
  document.getElementById('mcLocLabel').textContent = t('mc_location_label');
  document.getElementById('mcCamLabel').textContent = t('mc_camera_label');
  document.getElementById('mcLocValue').textContent = opts.location || '—';
  document.getElementById('mcCamValue').textContent = opts.cameraId || '—';
  /* Continue button copy reflects where the user will be sent next. Validation
     pulls them back to a finite punch list; maintenance pulls them back to a
     rolling task list (still called "recheck"). */
  const continueKey = (opts.returnTo === 'validation')
    ? 'mc_continue_btn_validation'
    : 'mc_continue_btn';
  document.getElementById('mcContinueLabel').textContent = t(continueKey);

  /* Old camera ID (swap flow only) */
  const oldEl = document.getElementById('mcCamOldValue');
  if (opts.flow === 'image_swap' && opts.oldCameraId) {
    oldEl.textContent = opts.oldCameraId;
    oldEl.style.display = 'block';
  } else {
    oldEl.style.display = 'none';
  }

  /* Wire continue — replace the listener each time so callers don't leak handlers */
  const btn = document.getElementById('mcContinueBtn');
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  newBtn.addEventListener('click', function () {
    if (typeof opts.onContinue === 'function') opts.onContinue();
  });

  /* Open */
  document.getElementById('mcOverlay').classList.add('open');
  document.getElementById('mcSheet').classList.add('open');
}

/* ──────────────────── Maintenance helpers ────────────────────
   Each installed section can have an `issues` array. Each issue:
     { id, type, sev }
       type: 'battery' | 'network' | 'coverage'
       sev:  'crit' | 'warn'
   Priority order (highest first): battery → network → coverage.
   When a camera has multiple issues, route troubleshooting starts at the
   highest-priority unresolved issue and walks down. */
const MAINT_PRIORITY = ['battery', 'network', 'coverage'];

/* Comparator that orders an issues array by priority. */
function sortIssuesByPriority(issues) {
  return issues.slice().sort((a, b) => {
    return MAINT_PRIORITY.indexOf(a.type) - MAINT_PRIORITY.indexOf(b.type);
  });
}

/* Return the top-priority unresolved issue for a section, or null. */
function topIssueFor(section) {
  if (!section || !section.issues || section.issues.length === 0) return null;
  const sorted = sortIssuesByPriority(section.issues);
  return sorted[0];
}

/* Route a troubleshooting flow based on issue type. */
function maintenanceRouteFor(issueType) {
  switch (issueType) {
    case 'battery':  return 'maint_battery_remove.html';
    case 'network':  return 'maint_network_remove.html';
    case 'coverage': return 'maint_coverage.html';
    default:         return 'maintenance.html';
  }
}

/* Resolve one issue on a section. If no issues remain after removal, the
   section is considered fully cleared and maintenance.html will move it to
   the completed list. Returns the remaining issues array. */
function resolveIssue(zoneId, aisleId, sectionId, issueId) {
  const m = getMap();
  const z = findZone(m, zoneId); if (!z) return null;
  const a = findAisle(z, aisleId); if (!a) return null;
  const s = findSection(a, sectionId); if (!s) return null;
  s.issues = (s.issues || []).filter(i => i.id !== issueId);
  saveMap(m);
  return s.issues;
}

/* For the recheck button — simulate whether an issue is resolved/improved/unchanged. */
function simulateRecheck(currentSev, issueType) {
  const r = Math.random();
  if (r < 0.50) return null; // resolved
  /* Coverage is critical-only — image quality is binary "trust it or don't",
     so a coverage critical can resolve or stay, but never "improve" to a warn. */
  if (issueType === 'coverage') return currentSev;
  if (currentSev === 'crit' && r < 0.70) return 'warn'; // improved
  return currentSev; // unchanged
}

/* Collect all sections that have issues, with zone/aisle context attached. */
function allOpenIssues() {
  const m = getMap();
  const out = [];
  (m.zones || []).forEach(z => {
    (z.aisles || []).forEach(a => {
      if (a.skipped) return;
      (a.sections || []).forEach(s => {
        if (s.skipped) return;
        if (!s.installed) return;
        if (!s.issues || s.issues.length === 0) return;
        out.push({
          zoneId: z.id, zoneName: z.name,
          aisleId: a.id, aisleNumber: a.number,
          sectionId: s.id, sectionNumber: s.number,
          cameraId: s.cameraId || '',
          lookAtAisle: s.lookAtAisle || '',
          issues: sortIssuesByPriority(s.issues),
        });
      });
    });
  });
  return out;
}

/* Seed the demo with realistic faked issues. Builds a complete fake store
   (zones → aisles → sections → installed cameras → issues) if no installed
   sections exist yet. Idempotent within a session unless force=true. */
function seedDemoIssues(force) {
  if (!force && sessionStorage.getItem('demoIssuesSeeded') === '1') return;

  let m = getMap();

  // Collect any sections already installed in the existing map
  const installedSections = [];
  (m.zones || []).forEach(z => {
    (z.aisles || []).forEach(a => {
      (a.sections || []).forEach(s => {
        if (s.installed && !s.skipped) installedSections.push(s);
      });
    });
  });

  // If nothing is installed yet, build a self-contained demo store from scratch
  if (installedSections.length === 0) {
    m = {
      zones: [
        { id: 'demo_z_a', name: 'A', aisles: [
          { id: 'demo_a_a1', number: 1, sections: [
            { id: 'demo_s_a11', number: 1, lookAtAisle: 'demo_a_a2', installed: true, cameraId: 'tc2ld-0000111' },
            { id: 'demo_s_a12', number: 2, lookAtAisle: 'demo_a_a2', installed: true, cameraId: 'tc2ld-0000222' },
            { id: 'demo_s_a13', number: 3, lookAtAisle: 'demo_a_a2', installed: true, cameraId: 'tc2ld-0000333' },
          ]},
          { id: 'demo_a_a2', number: 2, sections: [
            { id: 'demo_s_a21', number: 1, lookAtAisle: 'demo_a_a1', installed: true, cameraId: 'tc2ld-0000444' },
            { id: 'demo_s_a22', number: 2, lookAtAisle: 'demo_a_a1', installed: true, cameraId: 'tc2ld-0000555' },
          ]},
        ]},
        { id: 'demo_z_b', name: 'B', aisles: [
          { id: 'demo_a_b1', number: 1, sections: [
            { id: 'demo_s_b11', number: 1, lookAtAisle: 'demo_a_b2', installed: true, cameraId: 'tc2ld-0000666' },
            { id: 'demo_s_b12', number: 2, lookAtAisle: 'demo_a_b2', installed: true, cameraId: 'tc2ld-0000777' },
          ]},
          { id: 'demo_a_b2', number: 2, sections: [
            { id: 'demo_s_b21', number: 1, lookAtAisle: 'demo_a_b1', installed: true, cameraId: 'tc2ld-0000888' },
          ]},
        ]},
        { id: 'demo_z_c', name: 'C', aisles: [
          { id: 'demo_a_c1', number: 1, sections: [
            { id: 'demo_s_c11', number: 1, lookAtAisle: 'demo_a_c2', installed: true, cameraId: 'tc2ld-0000999' },
          ]},
          { id: 'demo_a_c2', number: 2, sections: [
            { id: 'demo_s_c21', number: 1, lookAtAisle: 'demo_a_c1', installed: true, cameraId: 'tc2ld-0001000' },
          ]},
        ]},
      ]
    };
    saveMap(m);
  }

  // Re-collect after potential seeding
  const targetSections = [];
  (m.zones || []).forEach(z => {
    (z.aisles || []).forEach(a => {
      (a.sections || []).forEach(s => {
        if (s.installed && !s.skipped) targetSections.push(s);
      });
    });
  });
  if (targetSections.length === 0) return;

  // Deterministic issue pattern so the demo looks the same each load.
  // Mix of singletons and stacks so the priority-routing behavior is visible.
  // Coverage is critical-only (image quality is binary — trust it or don't).
  const patterns = [
    [ { type: 'battery',  sev: 'crit' } ],
    [ { type: 'network',  sev: 'crit' }, { type: 'coverage', sev: 'crit' } ],
    [ { type: 'battery',  sev: 'warn' } ],
    [ { type: 'coverage', sev: 'crit' } ],
    [ { type: 'battery',  sev: 'crit' }, { type: 'network',  sev: 'warn' } ],
    [ { type: 'network',  sev: 'warn' } ],
    [ { type: 'battery',  sev: 'warn' } ],
  ];

  targetSections.slice(0, patterns.length).forEach((s, i) => {
    const baseIssues = patterns[i];
    s.issues = baseIssues.map((iss, j) => ({
      id: 'iss_' + Date.now() + '_' + i + '_' + j + '_' + Math.random().toString(36).slice(2, 6),
      type: iss.type,
      sev: iss.sev,
    }));
  });
  saveMap(m);
  sessionStorage.setItem('demoIssuesSeeded', '1');
}

/* ──────────────────── Validation helpers ────────────────────
   Validation is the day-of-install audit — last step of the contractor SOW.
   It reads the same map structure as maintenance but uses its own status colors
   that fold installation completeness (paper-tag path) and detected issues into
   a single "is this section / aisle / zone signed-off-ready?" answer.

   Status values:
     'green'  — section/group fully installed and clean
     'orange' — section/group has at least one warning-severity issue
     'red'    — section/group has at least one critical-severity issue
     'grey'   — paper-tag path only: section/group has uninstalled cameras

   Rollup rule (aisle / zone): worst-of-children with one nuance — grey rolls in
   only if at least one child is grey AND no red/orange is present. Once any
   real issue exists, that takes precedence over uninstalled state in the color
   the operator sees (a half-broken aisle reads as "issues to fix", not "more
   to install"). The detail view still surfaces uninstalled count separately. */

function sectionValidationStatus(s) {
  if (!s) return 'grey';
  if (s.skipped) return 'green'; // skipped sections don't count against anything
  if (!s.installed) return 'grey';
  if (!s.issues || s.issues.length === 0) return 'green';
  const hasCrit = s.issues.some(function (i) { return i.sev === 'crit'; });
  return hasCrit ? 'red' : 'orange';
}

function aisleValidationStatus(a) {
  if (!a || a.skipped) return 'green';
  const realSections = (a.sections || []).filter(function (s) { return !s.skipped; });
  if (realSections.length === 0) return 'green';
  const statuses = realSections.map(sectionValidationStatus);
  if (statuses.indexOf('red')    !== -1) return 'red';
  if (statuses.indexOf('orange') !== -1) return 'orange';
  if (statuses.indexOf('grey')   !== -1) return 'grey';
  return 'green';
}

function zoneValidationStatus(z) {
  if (!z) return 'green';
  const realAisles = (z.aisles || []).filter(function (a) { return !a.skipped; });
  if (realAisles.length === 0) return 'green';
  const statuses = realAisles.map(aisleValidationStatus);
  if (statuses.indexOf('red')    !== -1) return 'red';
  if (statuses.indexOf('orange') !== -1) return 'orange';
  if (statuses.indexOf('grey')   !== -1) return 'grey';
  return 'green';
}

function siteValidationStatus() {
  const m = getMap();
  if (!m.zones || m.zones.length === 0) return 'green';
  const statuses = m.zones.map(zoneValidationStatus);
  if (statuses.indexOf('red')    !== -1) return 'red';
  if (statuses.indexOf('orange') !== -1) return 'orange';
  if (statuses.indexOf('grey')   !== -1) return 'grey';
  return 'green';
}

/* Top-level validation status used by flow_picker:
     'none'        — not yet seeded (mapping incomplete or validation not entered)
     'in_progress' — seeded; user may have resolved some issues but not signed off
     'signed_off'  — entire site is green and user tapped "Sign off site"
*/
function getValidationStatus() {
  return sessionStorage.getItem('validationStatus') || 'none';
}
function setValidationStatus(s) { sessionStorage.setItem('validationStatus', s); }

/* Troubleshoot context resolution — both maintenance and validation push the
   same shape into sessionStorage, just under different keys. Pages downstream
   (install_v_battery, install_v_nfc, install_v_confirm, etc.) ask for the
   active context via this helper instead of hard-coding 'maintenanceContext'. */
function getActiveTroubleshootContext() {
  /* Validation takes precedence if both are set — validation can route through
     the same troubleshoot pages and we don't want a leftover maintenanceContext
     to misdirect the exit. */
  const raw = sessionStorage.getItem('validationContext')
           || sessionStorage.getItem('maintenanceContext');
  if (!raw) return null;
  try {
    const ctx = JSON.parse(raw);
    ctx.__source = sessionStorage.getItem('validationContext') ? 'validation' : 'maintenance';
    return ctx;
  } catch (e) { return null; }
}

function clearActiveTroubleshootContext() {
  sessionStorage.removeItem('maintenanceContext');
  sessionStorage.removeItem('validationContext');
}

/* Return URL for the troubleshoot completion modal's "Continue" button.
   Both flows take ?resolved=...&section=...&zone=...&aisle=... query params
   so the listing page can dim/remove the resolved item on arrival. */
function troubleshootReturnUrl(ctx, params) {
  const base = (ctx && ctx.__source === 'validation') ? 'validation.html' : 'maintenance.html';
  const qs = params && params.toString();
  return base + (qs ? '?' + qs : '');
}

/* Issue ID helper — keeps determinism so validation modal references are stable */
function vIssueId(zKey, aKey, sKey, suffix) {
  return 'vissue_' + zKey + '_' + aKey + '_' + sKey + '_' + suffix;
}

/* Build a deterministic camera ID for validation seed data so the demo always
   shows the same values (helps narration in screen-recorded walkthroughs). */
function vCamId(zoneIdx, aisleIdx, sectionIdx) {
  const n = (zoneIdx * 100 + aisleIdx * 10 + sectionIdx + 1).toString().padStart(7, '0');
  return 'tc2ld-' + n;
}

/* seedValidationData — wipes any prior validation seed and writes a fresh
   deterministic store appropriate to the chosen mapping path. Called when the
   user enters validation from flow_picker (NOT on internal navigation, so
   in-progress resolves stick).

   path: 'vusion' | 'manual'
     vusion — no uninstalled sections; 3 zones (A green, B orange, C mixed with red)
     manual — paper-tag path; 5 zones — one per rollup color plus a stacking demo:
              A green / B orange / C+D grey / E red (mixed red+orange aisles) */
function seedValidationData(path) {
  /* Vusion store layout — every section installed; issue mix demonstrates rollup colors */
  if (path === 'vusion') {
    const m = {
      zones: [
        { id: 'val_z_a', name: 'A', aisles: [
          { id: 'val_a_a1', number: 1, sections: [
            { id: 'val_s_a11', number: 1, lookAtAisle: 'val_a_a2', installed: true, cameraId: vCamId(0,0,0), issues: [] },
            { id: 'val_s_a12', number: 2, lookAtAisle: 'val_a_a2', installed: true, cameraId: vCamId(0,0,1), issues: [] },
            { id: 'val_s_a13', number: 3, lookAtAisle: 'val_a_a2', installed: true, cameraId: vCamId(0,0,2), issues: [] },
          ]},
          { id: 'val_a_a2', number: 2, sections: [
            { id: 'val_s_a21', number: 1, lookAtAisle: 'val_a_a1', installed: true, cameraId: vCamId(0,1,0), issues: [] },
            { id: 'val_s_a22', number: 2, lookAtAisle: 'val_a_a1', installed: true, cameraId: vCamId(0,1,1), issues: [] },
          ]},
        ]},
        /* Zone B — orange (warnings only) */
        { id: 'val_z_b', name: 'B', aisles: [
          { id: 'val_a_b1', number: 1, sections: [
            { id: 'val_s_b11', number: 1, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,0,0),
              issues: [{ id: vIssueId('b','1','1','batt'), type: 'battery', sev: 'warn' }] },
            { id: 'val_s_b12', number: 2, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,0,1), issues: [] },
            { id: 'val_s_b13', number: 3, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,0,2),
              issues: [{ id: vIssueId('b','1','3','net'), type: 'network', sev: 'warn' }] },
          ]},
          { id: 'val_a_b2', number: 2, sections: [
            { id: 'val_s_b21', number: 1, lookAtAisle: 'val_a_b1', installed: true, cameraId: vCamId(1,1,0), issues: [] },
            { id: 'val_s_b22', number: 2, lookAtAisle: 'val_a_b1', installed: true, cameraId: vCamId(1,1,1), issues: [] },
          ]},
        ]},
        /* Zone C — orange with one red aisle */
        { id: 'val_z_c', name: 'C', aisles: [
          { id: 'val_a_c1', number: 1, sections: [
            { id: 'val_s_c11', number: 1, lookAtAisle: 'val_a_c2', installed: true, cameraId: vCamId(2,0,0), issues: [] },
            { id: 'val_s_c12', number: 2, lookAtAisle: 'val_a_c2', installed: true, cameraId: vCamId(2,0,1), issues: [] },
          ]},
          /* Red aisle: critical issue */
          { id: 'val_a_c2', number: 2, sections: [
            { id: 'val_s_c21', number: 1, lookAtAisle: 'val_a_c1', installed: true, cameraId: vCamId(2,1,0),
              issues: [{ id: vIssueId('c','2','1','net'), type: 'network', sev: 'crit' }] },
          ]},
        ]},
      ]
    };
    saveMap(m);
    setValidationStatus('in_progress');
    return;
  }

  /* Paper-tag layout — same shape but with some uninstalled (grey) sections.
     One zone per rollup color, plus a stacking-demo zone:
       Zone A — all green (complete + healthy)
       Zone B — orange (3 aisles, warnings only, mixed issue types)
       Zone C — grey (nothing installed yet)
       Zone D — grey (nothing installed yet)
       Zone E — red (1 red aisle + 1 orange aisle — demos rollup precedence) */
  const m = {
    zones: [
      { id: 'val_z_a', name: 'A', aisles: [
        { id: 'val_a_a1', number: 1, sections: [
          { id: 'val_s_a11', number: 1, lookAtAisle: 'val_a_a2', installed: true, cameraId: vCamId(0,0,0), issues: [] },
          { id: 'val_s_a12', number: 2, lookAtAisle: 'val_a_a2', installed: true, cameraId: vCamId(0,0,1), issues: [] },
          { id: 'val_s_a13', number: 3, lookAtAisle: 'val_a_a2', installed: true, cameraId: vCamId(0,0,2), issues: [] },
        ]},
        { id: 'val_a_a2', number: 2, sections: [
          { id: 'val_s_a21', number: 1, lookAtAisle: 'val_a_a1', installed: true, cameraId: vCamId(0,1,0), issues: [] },
          { id: 'val_s_a22', number: 2, lookAtAisle: 'val_a_a1', installed: true, cameraId: vCamId(0,1,1), issues: [] },
        ]},
      ]},
      /* Zone B — all-orange: 3 aisles, warnings only, mixed issue types per aisle.
         Aisle 1 features battery warnings; Aisle 2 features network warnings; Aisle 3
         mixes both including one stacked section, so the demo covers single-issue and
         multi-issue orange sections. */
      { id: 'val_z_b', name: 'B', aisles: [
        { id: 'val_a_b1', number: 1, sections: [
          { id: 'val_s_b11', number: 1, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,0,0),
            issues: [{ id: vIssueId('b','1','1','batt'), type: 'battery', sev: 'warn' }] },
          { id: 'val_s_b12', number: 2, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,0,1), issues: [] },
          { id: 'val_s_b13', number: 3, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,0,2),
            issues: [{ id: vIssueId('b','1','3','batt'), type: 'battery', sev: 'warn' }] },
        ]},
        { id: 'val_a_b2', number: 2, sections: [
          { id: 'val_s_b21', number: 1, lookAtAisle: 'val_a_b1', installed: true, cameraId: vCamId(1,1,0),
            issues: [{ id: vIssueId('b','2','1','net'), type: 'network', sev: 'warn' }] },
          { id: 'val_s_b22', number: 2, lookAtAisle: 'val_a_b1', installed: true, cameraId: vCamId(1,1,1), issues: [] },
          { id: 'val_s_b23', number: 3, lookAtAisle: 'val_a_b1', installed: true, cameraId: vCamId(1,1,2),
            issues: [{ id: vIssueId('b','2','3','net'), type: 'network', sev: 'warn' }] },
        ]},
        { id: 'val_a_b3', number: 3, sections: [
          { id: 'val_s_b31', number: 1, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,2,0),
            issues: [{ id: vIssueId('b','3','1','batt'), type: 'battery', sev: 'warn' }] },
          { id: 'val_s_b32', number: 2, lookAtAisle: 'val_a_b2', installed: true, cameraId: vCamId(1,2,1),
            issues: [
              { id: vIssueId('b','3','2','batt'), type: 'battery', sev: 'warn' },
              { id: vIssueId('b','3','2','net'),  type: 'network', sev: 'warn' },
            ] },
        ]},
      ]},
      /* Zone C — grey (uninstalled) */
      { id: 'val_z_c', name: 'C', aisles: [
        { id: 'val_a_c1', number: 1, sections: [
          { id: 'val_s_c11', number: 1, lookAtAisle: 'val_a_c2', installed: false, issues: [] },
          { id: 'val_s_c12', number: 2, lookAtAisle: 'val_a_c2', installed: false, issues: [] },
        ]},
        { id: 'val_a_c2', number: 2, sections: [
          { id: 'val_s_c21', number: 1, lookAtAisle: 'val_a_c1', installed: false, issues: [] },
          { id: 'val_s_c22', number: 2, lookAtAisle: 'val_a_c1', installed: false, issues: [] },
        ]},
      ]},
      /* Zone D — grey (uninstalled) */
      { id: 'val_z_d', name: 'D', aisles: [
        { id: 'val_a_d1', number: 1, sections: [
          { id: 'val_s_d11', number: 1, lookAtAisle: null, installed: false, issues: [] },
          { id: 'val_s_d12', number: 2, lookAtAisle: null, installed: false, issues: [] },
          { id: 'val_s_d13', number: 3, lookAtAisle: null, installed: false, issues: [] },
        ]},
      ]},
      /* Zone E — red, with stacking demo: one red aisle (criticals) + one orange aisle
         (warnings only). Demonstrates that a single red child elevates the whole zone
         to red, while neighboring orange aisles stay distinct in the drill-down view. */
      { id: 'val_z_e', name: 'E', aisles: [
        { id: 'val_a_e1', number: 1, sections: [
          { id: 'val_s_e11', number: 1, lookAtAisle: 'val_a_e2', installed: true, cameraId: vCamId(4,0,0),
            issues: [{ id: vIssueId('e','1','1','net'), type: 'network', sev: 'crit' }] },
          { id: 'val_s_e12', number: 2, lookAtAisle: 'val_a_e2', installed: true, cameraId: vCamId(4,0,1),
            issues: [{ id: vIssueId('e','1','2','cov'), type: 'coverage', sev: 'crit' }] },
        ]},
        { id: 'val_a_e2', number: 2, sections: [
          { id: 'val_s_e21', number: 1, lookAtAisle: 'val_a_e1', installed: true, cameraId: vCamId(4,1,0),
            issues: [{ id: vIssueId('e','2','1','batt'), type: 'battery', sev: 'warn' }] },
          { id: 'val_s_e22', number: 2, lookAtAisle: 'val_a_e1', installed: true, cameraId: vCamId(4,1,1), issues: [] },
        ]},
      ]},
    ]
  };
  saveMap(m);
  setValidationStatus('in_progress');
}

/* ----------- Image with filename fallback -----------
   Usage in HTML:  <div class="img-slot" data-src="tag-blurry.png" data-alt="Tag blurry"></div>
   Or via JS:      mountImage(slotEl)   /   imgWithFallback('tag-focused.png', 'Tag focused')

   When the PNG exists, it renders as <img>. When it's missing,
   it renders a dashed placeholder card showing the expected filename so
   the user can spot which assets still need to be created.
*/
function imgWithFallback(src, alt = '') {
  const wrap = document.createElement('div');
  wrap.className = 'img-fallback-wrap';
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = 'img-fallback-img';
  img.addEventListener('error', () => {
    wrap.innerHTML = '';
    const placeholder = document.createElement('div');
    placeholder.className = 'img-fallback-card';
    placeholder.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <div class="img-fallback-name">${src}</div>
    `;
    wrap.appendChild(placeholder);
  });
  wrap.appendChild(img);
  return wrap;
}
function mountImageSlots(root = document) {
  root.querySelectorAll('[data-src]').forEach(slot => {
    const src = slot.getAttribute('data-src');
    const alt = slot.getAttribute('data-alt') || '';
    const wrap = imgWithFallback(src, alt);
    slot.appendChild(wrap);
  });
}

/* ----------- Web Audio scan beep ----------- */
let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) _audioCtx = new Ctx();
  }
  return _audioCtx;
}
function playScanBeep() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();
  const now = ctx.currentTime;

  // 1) Click transient — a tiny burst of filtered noise to simulate the "tick"
  //    of a barcode reader engaging. Lasts ~25ms.
  const noiseDur  = 0.04;
  const noiseBuf  = ctx.createBuffer(1, ctx.sampleRate * noiseDur, ctx.sampleRate);
  const noiseData = noiseBuf.getChannelData(0);
  for (let i = 0; i < noiseData.length; i++) {
    noiseData[i] = (Math.random() * 2 - 1) * (1 - i / noiseData.length);
  }
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuf;
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.value = 2000;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.18, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + noiseDur);
  noise.connect(noiseFilter).connect(noiseGain).connect(ctx.destination);
  noise.start(now);
  noise.stop(now + noiseDur);

  // 2) Two stacked square-ish tones — the "beep" body. Slight detune + a fast
  //    pitch step gives that POS-scanner feel without being shrill.
  const start = now + 0.015;
  const dur   = 0.16;

  function tone(freqStart, freqEnd, level) {
    const osc = ctx.createOscillator();
    osc.type = 'triangle'; // softer than square, brighter than sine
    const g = ctx.createGain();
    osc.frequency.setValueAtTime(freqStart, start);
    osc.frequency.exponentialRampToValueAtTime(freqEnd, start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(level, start + 0.012);
    g.gain.setValueAtTime(level, start + dur - 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(g).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + dur);
  }
  tone(1480, 1760, 0.16);  // upper voice — bright, ~F#6 to A6
  tone(740,  880,  0.10);  // lower voice — body, one octave below
}
function showToast({ title, message, actionLabel, onAction, icon = 'info', autoHide = false }) {
  // Remove any existing toast
  const existing = document.getElementById('cap-toast');
  if (existing) existing.remove();

  const colors = {
    info:    { bg: '#EFF6FF', fg: '#2563EB' },
    success: { bg: '#F0FDF4', fg: '#16A34A' },
    warn:    { bg: '#FFF7ED', fg: '#F59E0B' },
    error:   { bg: '#FEF2F2', fg: '#EF4444' },
  };
  const c = colors[icon] || colors.info;

  const toast = document.createElement('div');
  toast.id = 'cap-toast';
  toast.innerHTML = `
    <div class="cap-toast-icon" style="background:${c.bg};color:${c.fg}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        ${icon === 'success'
          ? '<polyline points="20 6 9 17 4 12"/>'
          : icon === 'warn' || icon === 'error'
            ? '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
            : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'}
      </svg>
    </div>
    <div class="cap-toast-body">
      ${title    ? `<div class="cap-toast-title">${title}</div>`    : ''}
      ${message  ? `<div class="cap-toast-msg">${message}</div>`    : ''}
      ${actionLabel ? `<button class="cap-toast-action">${actionLabel}</button>` : ''}
    </div>
    <button class="cap-toast-close" aria-label="close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  `;
  document.body.appendChild(toast);

  const dismiss = () => {
    toast.classList.add('cap-toast-leaving');
    setTimeout(() => toast.remove(), 280);
  };

  toast.querySelector('.cap-toast-close').addEventListener('click', dismiss);
  if (actionLabel && onAction) {
    toast.querySelector('.cap-toast-action').addEventListener('click', () => {
      dismiss();
      onAction();
    });
  }

  // Animate in
  requestAnimationFrame(() => toast.classList.add('cap-toast-in'));

  if (autoHide) setTimeout(dismiss, autoHide);

  return { dismiss };
}
