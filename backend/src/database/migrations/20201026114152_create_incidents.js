exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        //armazenar ond id
        table.string('ong_id').notNullable();
        //criação da chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
