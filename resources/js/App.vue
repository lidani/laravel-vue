<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center">
            <h1>Laravel + Vuetify</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-text>
                <v-text-field outlined label="Foo"></v-text-field>
                <v-btn>Botão personalizado com 20px de radius</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>
